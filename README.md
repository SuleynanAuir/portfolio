# Suleynan Aiur · AI Research Lab

将 `cvweb` 的 AI 研究内容融入 Paperfolio 作品集模板，保留粗黑描边、彩色高亮、圆角卡片、错位阴影、倾斜技术横幅与黑底研究历程的视觉风格。

## 运行

```bash
npm ci
npm run dev
```

- 英文首页：`http://localhost:3000/`
- 中文首页：`http://localhost:3000/zh/`
- 全部项目：`/projects/`、`/zh/projects/`
- 全部笔记：`/notes/`、`/zh/notes/`

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

`npm run build` 生成适用于 GitHub Project Pages 的 `out/` 静态目录（默认前缀 `/portfolio`）；`npm start` 自动读取构建前缀，预览地址为 `http://localhost:3000/portfolio/`。开发模式仍使用根路径。原始的 `cvweb/` 项目保留独立，其配置和依赖不会参与根项目的类型检查与样式扫描。

## 内容对应

| Paperfolio 模块 | 整合后的内容                                                                                       |
| --------------- | -------------------------------------------------------------------------------------------------- |
| 首页介绍        | 两行个人标题、原头像、彩色粗体技能简介、BNBU 教育背景、GPA、荣誉与 GitHub 入口                     |
| 技术横幅        | ML&DL Algorithms、Representation Learning、CV-NLP Multimodal Perception、LLMs、Agentic AI 五个主题 |
| 服务卡片        | 六个研究方向及其项目跳转                                                                           |
| 关于介绍        | 研究愿景、系统原则、根据数据计算的项目数量                                                         |
| 作品集          | 17 个项目、六类筛选、关键词搜索、独立详情页                                                        |
| 履历区          | 从机器学习到科学 AI 的六阶段研究路径                                                               |
| 客户评价区      | 作者的研究原则                                                                                     |
| 文章区          | 10 篇原始 Markdown 项目笔记                                                                        |
| 联系与页脚      | 真实 GitHub 入口、研究兴趣、站内导航                                                               |

项目详情保留摘要、技术标签、仓库、研究贡献、体系定位、README 要点、逻辑链路、专业知识、官方学习资料与原始图示。中英文界面切换保留当前详情页；原文只提供英文的笔记、学习资料和部分技术链路保留原文。

`/asrl_agent_ml_dl_cv_nlp/`、`/zh/asrl_agent_ml_dl_cv_nlp/` 及原始 Markdown 项目的 `/projects/<slug>/` 入口均可继续访问。旧笔记与完整研究项目之间通过映射连接，优先使用研究项目数据中的仓库地址。

## 内容与设置

- `lib/site-config.ts`：个人资料、GitHub、资源前缀、研究方向配色、项目与原笔记 URL 映射。
- `data/profile.ts`：教育背景、GPA、荣誉、五个横幅主题与彩色粗体技能简介。
- `data/portfolio.ts`：从 cvweb 迁入的完整六类研究项目数据。
- `data/site-copy.ts`：原中英文研究文案和翻译。
- `content/projects/*.md`：从 cvweb 迁入的 10 篇笔记。
- `components/`：匹配 Paperfolio 风格的各页面模块与双语界面。
- `app/globals.css`：统一视觉规则、桌面/平板/手机布局、减少动画偏好与键盘焦点样式。
- `public/assets/web_page/`：45 张原始图片，保留用于查看大图。
- `public/assets/optimized/`：压缩后的 WebP；`npm run optimize:images` 可重新生成，开发与构建前自动执行。
- `public/fonts/`：本地 Onest 字体及 SIL Open Font License，构建时无需访问 Google Fonts。

数据、文案和资源已复制到根项目，运行时不依赖 `cvweb/`。

## GitHub Project Pages 部署

目标仓库：`SuleynanAuir/portfolio`。

- 网站地址：`https://suleynanauir.github.io/portfolio/`
- 中文入口：`https://suleynanauir.github.io/portfolio/zh/`
- 自动部署文件：`.github/workflows/pages.yml`

在仓库的 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**，然后把网站代码推送到 `main`，或在 Actions 中手动运行 **Deploy portfolio to GitHub Pages**。成功发布后，以部署任务显示的 `github-pages` 环境链接为准。

工作流安装依赖、执行 lint、生成优化图片并构建静态页面；Next.js 构建同时检查 TypeScript。它读取 GitHub 返回的 `base_path` 与 `base_url`，将资源前缀、语言切换、站点地图及网站元数据统一到实际部署地址，再上传并部署 `out/`。构建和部署分别授予最小所需权限。

本地可直接验证对应的生产版本：

```bash
npm run build
npm start
# http://localhost:3000/portfolio/
# http://localhost:3000/portfolio/zh/
```

`out/` 包含 `.nojekyll`、`404.html`、`sitemap.xml`、`robots.txt` 和供本地预览使用的 `deployment.json`。无需 Node.js 服务器运行线上网站，也无需把 `out/` 提交进源码仓库。原始备份 `cvweb/` 不参与构建。

如部署到其他项目路径，可显式覆盖：

```bash
NEXT_PUBLIC_BASE_PATH=/another-repo NEXT_PUBLIC_SITE_URL=https://example.github.io/another-repo npm run build
```

根域名部署使用空前缀：

```bash
NEXT_PUBLIC_BASE_PATH= NEXT_PUBLIC_SITE_URL=https://example.com npm run build
```

请为每个部署路径单独构建，不要将带子路径的产物直接发布到根域名。私有仓库需要账户计划支持 GitHub Pages；本项目不会自动修改仓库的公开/私有设置。

部署流程参考 [GitHub Pages 官方工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

模板原有但未使用的依赖已清理，使用 npm 与 `package-lock.json` 统一安装。Next.js 与 cvweb 已安装的版本对齐为 15.5.20。
