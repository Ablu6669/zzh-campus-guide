# 🎓 校园新生指南 | Campus New Student Guide

> 香港中文大学（深圳）校园新生指南 —— 一个帮助学生快速了解校园的一站式信息平台
>
> A one-stop information platform for new students at The Chinese University of Hong Kong, Shenzhen

🌐 **在线访问 | Live Site**: https://ablu6669.github.io/zzh-campus-guide/

---

## ✨ 功能特性 | Features

| 板块 | 中文描述 | English |
|------|---------|---------|
| 🗺️ 校园地图 | 交互式校园地图，快速定位教学楼、图书馆、宿舍等地点 | Interactive campus map to locate buildings, libraries, dorms, etc. |
| 📞 常用联系方式 | 8大学院 + 8大书院 + 18个行政部门，共34个联系人目录 | 34 contacts across 8 colleges, 8 residential colleges & 18 admin departments |
| 🌐 常用网站 | 核心官网、学生内网平台、常用小程序及学校邮箱使用指南 | Official websites, intranet platforms, mini-programs & email guides |
| 🏢 常用设施及服务 | 8家食堂、4家餐厅、咖啡茶饮、便利店、书店文印、社康中心等16类服务 | 16 service categories: canteens, restaurants, cafés, stores, clinic & more |
| 📚 常用缩写 | 145条校园英文缩写 + 46条常用短语，支持中英双语搜索 | 145 abbreviations + 46 phrases with bilingual search |
| ❓ 常见问题 | 学习、生活、行政三大类共8个常见问题解答 | 8 FAQs across 3 categories: study, daily life & administration |

---

## 🌍 国际化 | Internationalization

- 完整中英双语支持 | Full Chinese-English bilingual support
- 1300+ 翻译词条 | 1,300+ translation entries
- 一键语言切换 | One-click language toggle

---

## 🛠️ 技术栈 | Tech Stack

- **HTML5** — 单文件 SPA 架构 | Single-file SPA architecture
- **CSS3** — 响应式设计 | Responsive design
- **Vanilla JavaScript** — 无框架依赖 | No framework dependency
- **data-i18n** — 自定义国际化方案 | Custom i18n solution

---

## 📁 项目结构 | Project Structure

```
zzh-campus-guide/
├── index.html          # 单文件应用（含所有页面、样式、脚本）
├── README.md           # 项目说明文档
└── (源码结构)
    ├── website/
    │   ├── index.html          # 登录页
    │   ├── css/style.css       # 样式表
    │   ├── js/
    │   │   ├── i18n.js         # 翻译引擎 + 词条
    │   │   ├── login.js        # 登录逻辑
    │   │   └── main.js         # 导航逻辑
    │   ├── images/             # 图片资源
    │   └── pages/
    │       ├── main.html           # 首页
    │       ├── campus-map.html     # 校园地图
    │       ├── contacts.html       # 常用联系方式
    │       ├── websites.html       # 常用网站
    │       ├── facilities.html     # 常用设施及服务
    │       ├── faq.html            # 常见问题
    │       └── abbreviations.html  # 常用缩写
    └── build_single_html.py   # 单文件打包脚本
```

---

## 🚀 部署 | Deployment

### GitHub Pages（当前方式）

1. 将 `index.html` 推送到 GitHub 仓库 main 分支
2. 仓库 Settings → Pages → Source 选择 `main` 分支
3. 访问 `https://<username>.github.io/<repo-name>/`

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

1. 修改 `website/` 目录下的源码
2. 运行 `python build_single_html.py` 重新打包
3. 将生成的 `index.html` 推送到 GitHub

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
