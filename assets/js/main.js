---
---

(function () {
  function getScholarBaseUrl() {
    var useCdn = String("{{ site.google_scholar_stats_use_cdn | default: true }}") === "true";
    var repo = "{{ site.repository | default: '' }}";
    if (!repo) return null;
    if (useCdn) return "https://cdn.jsdelivr.net/gh/" + repo + "@main/";
    return "https://raw.githubusercontent.com/" + repo + "/main/";
  }

  function safeText(el, text) {
    if (!el) return;
    el.textContent = text;
  }

  async function updateScholarStats() {
    var base = getScholarBaseUrl();
    if (!base) return;

    var url = base + "google-scholar-stats/gs_data.json";
    var resp;
    try {
      resp = await fetch(url, { cache: "no-cache" });
    } catch (e) {
      return;
    }
    if (!resp.ok) return;

    var data;
    try {
      data = await resp.json();
    } catch (e) {
      return;
    }

    if (data && typeof data.citedby !== "undefined") {
      safeText(document.getElementById("total_cit"), String(data.citedby));
    }

    var citationEles = document.getElementsByClassName("show_paper_citations");
    if (!citationEles || !citationEles.length) return;

    Array.prototype.forEach.call(citationEles, function (element) {
      var paperId = element.getAttribute("data");
      if (!paperId) return;
      var pubs = data && data.publications;
      var pub = pubs && pubs[paperId];
      var num = pub && pub.num_citations;
      if (typeof num === "undefined" || num === null) return;
      element.textContent = "| Citations: " + String(num);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateScholarStats);
  } else {
    updateScholarStats();
  }
})();


