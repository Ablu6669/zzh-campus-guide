# 🎓 校园新生指南 | Campus New Student Guide

> 多校校园新生指南平台 —— 帮助新生快速了解校园的一站式信息平台
>
> A multi-campus one-stop information platform for new students
>
> 当前收录：**香港中文大学（深圳）** · **哈尔滨工业大学（深圳）**

🌐 **在线访问 | Live Site**: https://ablu6669.github.io/zzh-campus-guide/

---

## 🏫 已收录学校 | Schools

| 学校 | 入口 | 说明 |
|------|------|------|
| 香港中文大学（深圳） | 主系统（单文件 SPA） | 地图 / 联系方式 / 网站 / 设施 / 缩写 / FAQ 六大板块 |
| 哈尔滨工业大学（深圳） | `hitsz/index.html` | 独立单文件系统，含地图、设施、办事指南、课程表、美食、社区等 |
| 更多学校 | — | 即将开放 Coming Soon |

> 入口页（登录页）可切换学校。进入哈工深板块后，顶部导航栏「切换学校」可返回主入口。

---

## ✨ 功能特性 | Features

### 香港中文大学（深圳）

| 板块 | 中文描述 | English |
|------|---------|---------|
| 🗺️ 校园地图 | 交互式校园地图，86 个地点标记，支持缩放、拖拽、筛选、全屏 | Interactive campus map with 86 markers, zoom / pan / filter / fullscreen |
| 📞 常用联系方式 | 8 大学院 + 8 大书院 + 18 个行政部门，共 34 个联系人目录 | 34 contacts across 8 colleges, 8 residential colleges & 18 admin departments |
| 🌐 常用网站 | 12 个核心官网与内网平台 + 7 个常用小程序 + 邮箱使用指南 | 12 official websites, 7 mini-programs & email guides |
| 🏢 常用设施及服务 | 18 类共 48 个条目：8 家食堂、4 家餐厅、咖啡茶饮、便利店、书店文印、社康中心等 | 18 categories / 48 entries: canteens, restaurants, cafés, stores, clinic & more |
| 📚 常用缩写 | 218 条校园英文缩写 + 42 条常用短语，支持中英双语搜索 | 218 abbreviations + 42 phrases with bilingual search |
| ❓ 常见问题 | 学校概况、学习、生活、娱乐四大类共 53 条问答 | 53 FAQs across 4 categories |

### 哈尔滨工业大学（深圳）

| 板块 | 说明 |
|------|------|
| 🗺️ 校园地图 | 校园地点导航 |
| 🏢 设施服务 | 校内设施与服务介绍 |
| 📋 办事指南 | 新生办事流程 |
| 📅 课程表工具 | 课表管理 |
| 🍜 美食推荐 | 校园餐饮推荐 |
| 💬 经验社区 | 学长学姐经验分享 |
| 📞 联系方式 | 常用联系电话汇总 |
| 🌐 常用网站 | 官网与系统入口导航 |
| ❓ FAQ | 常见问题解答 |

---

## 🌍 国际化 | Internationalization

- 完整中英双语支持 | Full Chinese-English bilingual support
- 1300+ 翻译词条 | 1,300+ translation entries
- 一键语言切换 | One-click language toggle
- 深色 / 浅色主题切换 | Dark / light theme toggle

---

## 🛠️ 技术栈 | Tech Stack

- **HTML5** — 单文件 SPA 架构 | Single-file SPA architecture
- **CSS3** — 响应式设计，CSS 变量驱动的主题系统 | Responsive design with CSS-variable theming
- **Vanilla JavaScript** — 无框架依赖 | No framework dependency
- **data-i18n** — 自定义国际化方案 | Custom i18n solution
- **Python** — 构建脚本（图片内联、页面打包） | Build scripts (image inlining, page bundling)

---

## 📁 项目结构 | Project Structure

```
zzh-campus-guide/
├── index.html                  # 主应用单文件（港中深，含全部页面/样式/脚本）
├── hitsz/
│   ├── index.html              # 哈工深新生指南（独立单文件系统）
│   └── hitsz-logo.png          # 哈工深校徽
├── images/                     # 校园地图等大图（不内联）
├── README.md                   # 项目说明文档
└── (源码结构)
    ├── website/
    │   ├── index.html          # 学校选择入口页
    │   ├── css/style.css       # 全局样式表
    │   ├── js/
    │   │   ├── i18n.js         # 翻译引擎 + 词条
    │   │   ├── login.js        # 入口页学校选择逻辑
    │   │   ├── main.js         # 导航逻辑
    │   │   └── theme.js        # 主题切换
    │   ├── images/
    │   │   └── schools/        # 各校校徽（入口页卡片）
    │   └── pages/
    │       ├── main.html           # 首页
    │       ├── campus-map.html     # 校园地图
    │       ├── contacts.html       # 常用联系方式
    │       ├── websites.html       # 常用网站
    │       ├── facilities.html     # 常用设施及服务
    │       ├── faq.html            # 常见问题
    │       ├── abbreviations.html  # 常用缩写
    │       └── guide.html          # 使用说明
    └── build_single_html.py   # 单文件打包脚本
```

---

## 🚀 部署 | Deployment

### GitHub Pages（当前方式）

1. 将 `index.html`、`hitsz/` 目录、`images/` 目录推送到 GitHub 仓库 main 分支
2. 仓库 Settings → Pages → Source 选择 `main` 分支
3. 访问 `https://<username>.github.io/<repo-name>/`

> ⚠️ **注意**：`hitsz/` 目录必须与 `index.html` 同级，否则哈工深入口会 404。

### 本地运行 | Local Development

```bash
# 使用源码开发
cd website
python -m http.server 8080
# 访问 http://localhost:8080

# 打包单文件
python build_single_html.py
# 生成 index.html
```

---

## 🔄 更新内容 | How to Update

1. 修改 `website/` 目录下的源码（哈工深板块直接改 `hitsz/index.html`）
2. 运行 `python build_single_html.py` 重新打包
3. 将生成的 `index.html`（及 `hitsz/`、`images/`）推送到 GitHub

```bash
git add .
git commit -m "update: 描述你的改动"
git push
```

---

## 📄 许可证 | License

Apache License 2.0

---

## 👤 作者 | Author

**Ablu6669**

GitHub: [@Ablu6669](https://github.com/Ablu6669)

## 🙏 致谢 | Credits

- **哈工深板块制作人：暴景明** —— 独立完成哈尔滨工业大学（深圳）新生指南系统
- 港中大（深圳）校园新生指南 © 2026 Ablu6669
