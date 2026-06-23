# 校园新生指南系统 (New Student Guide)

为香港中文大学（深圳）新生打造的一站式校园信息平台，涵盖校园地图、常用网站、设施服务、通讯录、常见问题及缩写查询等功能。支持中英文双语切换，移动端优先设计。

线上访问：<https://ablu6669.github.io/zzh-campus-guide/>

## 功能模块

| 模块 | 说明 |
|------|------|
| 校园地图 | 校园建筑/设施位置导航，按分类筛选 |
| 常用网站 | 内网门户、教务系统、图书馆、打印平台等常用网址聚合 |
| 常用设施及服务 | 食堂、餐厅、咖啡茶饮、便利店、物业、理发、干洗、社康中心等 17 项设施信息 |
| 通讯录 | 学校各部门及书院联系方式 |
| 常见问题 | 学校、学习、生活、娱乐四大类新生常见 Q&A |
| 缩写查询 | 校园常用缩写/简称对照表 |

## 技术架构

- **纯前端**：HTML + CSS + JavaScript，无后端依赖
- **单文件构建**：`build_single_html.py` 将所有页面、样式、脚本、图片合并为单个 `index.html`，方便部署到 GitHub Pages
- **国际化**：`i18n.js` 统一管理中英文翻译，通过 `data-i18n` 属性绑定，支持动态切换
- **移动优先**：响应式布局，适配手机/平板/桌面

## 项目结构

```
.
├── website/                  # 源码目录
│   ├── index.html            # 登录页
│   ├── pages/                # 子页面
│   │   ├── main.html         # 首页（功能卡片导航）
│   │   ├── campus-map.html   # 校园地图
│   │   ├── websites.html     # 常用网站
│   │   ├── facilities.html   # 常用设施及服务
│   │   ├── contacts.html     # 通讯录
│   │   ├── faq.html          # 常见问题
│   │   └── abbreviations.html# 缩写查询
│   ├── css/
│   │   └── style.css         # 全局样式
│   ├── js/
│   │   ├── i18n.js           # 国际化翻译词典（中/英）
│   │   ├── login.js          # 登录页逻辑
│   │   └── main.js           # 主页导航逻辑
│   └── images/               # 图片资源（学校 logo 等）
├── build_single_html.py      # 构建脚本 → 合并为 index.html
├── index.html                # 构建产物（单文件，可直接部署）
├── campus-guide-qr.png       # 网站二维码
└── README.md
```

## 开发与构建

### 修改内容

1. 编辑 `website/` 下的源文件（HTML / CSS / JS）
2. 若新增翻译条目，在 `website/js/i18n.js` 的 `dict` 对象中添加对应键值

### 构建单文件

```bash
python build_single_html.py
```

构建后生成 `index.html`，所有 CSS/JS/图片内联，可直接部署。

### 本地预览

```bash
# 任选一种方式启动静态服务器
python -m http.server 8099
# 或
npx serve -p 8099
```

浏览器打开 `http://localhost:8099/` 即可预览。

### 部署到 GitHub Pages

将 `index.html` 上传至 GitHub 仓库，启用 Pages 服务即可。

## i18n 使用说明

- HTML 元素通过 `data-i18n="key"` 属性标记需要翻译的文本
- 翻译条目定义在 `i18n.js` 的 `dict` 对象中，格式：`'key': { zh: '中文', en: 'English' }`
- 若条目包含 HTML 标签（如 `<strong>`），需添加 `html: true` 属性
- **注意**：字典每条目末尾必须有逗号，否则 JS 语法错误会导致整个页面空白
- 可用 `node --check website/js/i18n.js` 验证语法

## 二维码

`campus-guide-qr.png` 为网站二维码，使用 Python `qrcode` + `Pillow` 生成，带有自定义 Logo 和品牌样式。

## License

MIT
