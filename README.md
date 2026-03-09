# 📰 每日简报系统 (Daily Briefing)

> 专业成长型每日简报 - 聚合加密货币投资、AI 工具情报、跨境支付专业知识

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/specialzhou/daily-briefing)

---

## 🎯 产品定位

面向跨境支付行业技术从业者的**专业成长型每日简报系统**，聚合以下核心板块：

| 板块 | 图标 | 内容 |
|------|------|------|
| 💰 加密货币投资 | 📈 | 行情分析、投资机会、投资建议 |
| 🤖 OpenClaw 推荐 | 🔧 | 高赞用法、插件、Skill 推荐 |
| 💻 Claude Code 推荐 | 💡 | 高效用法推荐 |
| 📰 AI 情报 | 🚀 | 官方信息源 + 社区高热讨论 |
| 🌍 跨境支付训练营 | 📚 | 系统性知识学习 |

---

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/specialzhou/daily-briefing.git
cd daily-briefing/web

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 构建生产版本

```bash
npm run build
npm run export
```

---

## 📁 项目结构

```
daily-briefing/
├── web/                          # Next.js 前端
│   ├── app/
│   │   ├── api/briefing/        # API 路由
│   │   ├── globals.css          # 全局样式
│   │   ├── layout.tsx           # 布局
│   │   └── page.tsx             # 首页 (5 大板块)
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── tsconfig.json
├── .github/workflows/
│   └── daily-brief.yml          # 定时任务 (每天 9:00)
├── docs/
│   ├── prd.md                   # 产品需求文档
│   ├── design-guide.md          # 设计规范
│   └── wireframes.md            # 线框图
└── README.md
```

---

## ✨ 功能特性

### 核心功能
- ✅ **5 大内容板块** - 卡片式布局，清晰展示
- ✅ **标记已读** - 点击即可标记，状态持久化
- ✅ **收藏功能** - 收藏感兴趣的内容
- ✅ **笔记功能** - 添加个人笔记
- ✅ **任务转化** - 一键转为待办任务
- ✅ **历史归档** - 按日期浏览历史简报

### 技术特性
- ✅ **响应式设计** - 桌面/平板/移动三端适配
- ✅ **LocalStorage** - 数据本地存储 (v1.0)
- ✅ **静态导出** - 可部署到任意静态托管
- ✅ **定时任务** - GitHub Actions 自动生成

---

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 14.x | React 框架 |
| React | 18.x | UI 库 |
| Tailwind CSS | 3.x | 样式框架 |
| Vercel | - | 部署平台 |
| GitHub Actions | - | 定时任务 |

---

## 📅 定时任务

系统配置了 GitHub Actions，每天**北京时间 9:00**自动生成并推送简报。

### 配置 Secrets

在 GitHub 仓库设置中添加以下 Secrets：

| Secret | 说明 |
|--------|------|
| `VERCEL_TOKEN` | Vercel API Token |
| `VERCEL_ORG_ID` | Vercel 组织 ID |
| `VERCEL_PROJECT_ID` | Vercel 项目 ID |
| `MATRIX_ACCESS_TOKEN` | Matrix 访问 Token |

### 手动触发

也可以手动触发工作流：
1. 进入 Actions 标签页
2. 选择 "Generate Daily Briefing"
3. 点击 "Run workflow"

---

## 🌐 部署到 Vercel

### 方式一：一键部署

点击顶部 "Deploy to Vercel" 按钮

### 方式二：手动部署

```bash
cd web
npx vercel
```

### 环境变量

部署时配置以下环境变量：

| 变量 | 说明 |
|------|------|
| `NEXT_PUBLIC_API_URL` | API 地址 (可选) |

---

## 📋 产品文档

- [产品需求文档 (PRD)](./docs/prd.md)
- [设计规范](./docs/design-guide.md)
- [线框图](./docs/wireframes.md)

---

## 🗓️ 开发计划

| 版本 | 功能 | 状态 |
|------|------|------|
| v1.0 | 基础功能 (5 大板块 + 交互功能) | ✅ 完成 |
| v1.1 | 用户系统 + 数据同步 | 📋 计划中 |
| v1.2 | 个性化定制 + 推送设置 | 📋 计划中 |
| v1.3 | AI 摘要生成 + 智能推荐 | 📋 计划中 |

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📄 许可证

MIT License

---

**🎉 每日简报系统 v1.0 - 开发完成！**
