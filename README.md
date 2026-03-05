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

> 如果你想继续使用 scholar crawler，把 `repository` 配好，并确保生成的 `google-scholar-stats/gs_data.json` 位于 `main` 分支即可。


