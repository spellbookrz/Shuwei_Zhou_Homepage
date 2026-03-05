# new_homepage (简洁学术主页模板)

这个文件夹是基于 `Basical_information/acad-homepage.github.io` 重新整理的**极简学术主页模板**：
- 保留原有信息（`_config.yml` 的 `author` 与 `index.md` 的内容）
- 更轻量的布局与样式（无 sidebar、无 jQuery 依赖）
- 仍支持（可选）Google Scholar 引用数自动显示（如果你的仓库里有 `google-scholar-stats/gs_data.json`）

## 本地预览

1. 安装 Ruby / Bundler（按你机器环境即可）
2. 在本目录执行：

```bash
bundle install
bash run_server.sh
```

然后打开 `http://127.0.0.1:4000`

> 说明：部分依赖包含原生扩展（native extension），本地可能需要 `gcc/make` 等开发工具链才能 `bundle install` 成功。

## 部署到 GitHub Pages

把这个文件夹作为一个独立仓库（例如 `USERNAME.github.io`），push 到 GitHub 后，在仓库设置里开启 GitHub Pages（如果需要）。

## Google Scholar 引用数自动更新（可选）

本模板已自带 GitHub Actions 工作流：每天 08:00 UTC 自动抓取 Google Scholar 数据，并推送到仓库的 `google-scholar-stats` 分支。

你需要做的：
1. 在仓库里添加 secret：`Settings → Secrets and variables → Actions → New repository secret`
   - **Name**：`GOOGLE_SCHOLAR_ID`
   - **Value**：你的 Google Scholar ID（在 Scholar 主页链接里 `user=...` 的值）
2. 进入仓库 `Actions` 页面，找到 **Update Google Scholar Citation Data**，点一次 **Run workflow** 做首次生成。

验证方式：
- 仓库出现分支 **`google-scholar-stats`**，且包含 `gs_data.json`
- 页面里 `<span class='show_paper_citations'>` 会显示 `| Citations: N`


