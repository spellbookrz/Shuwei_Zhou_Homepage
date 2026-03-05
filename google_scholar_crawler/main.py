from scholarly import scholarly, ProxyGenerator
import json
from datetime import datetime
import os
import time

max_attempts = 100
wait_seconds = 600  # 10 minutes

author = None
for attempt in range(1, max_attempts + 1):
    try:
        print(f"Attempt {attempt}:")
        pg = ProxyGenerator()
        pg.FreeProxies()
        scholarly.use_proxy(pg)

        author = scholarly.search_author_id(os.environ["GOOGLE_SCHOLAR_ID"])
        scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])
        print(f"Attempt {attempt} success")
        break
    except Exception as e:
        print(f"Attempt {attempt} failed with error: {e}")
        time.sleep(wait_seconds)

if author is None:
    raise RuntimeError("All attempts failed to fetch Google Scholar data.")

author["updated"] = str(datetime.now())
author["publications"] = {v["author_pub_id"]: v for v in author["publications"]}

os.makedirs("results", exist_ok=True)
with open("results/gs_data.json", "w") as outfile:
    json.dump(author, outfile, ensure_ascii=False)

shieldio_data = {
    "schemaVersion": 1,
    "label": "citations",
    "message": f"{author.get('citedby', '')}",
}
with open("results/gs_data_shieldsio.json", "w") as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)


