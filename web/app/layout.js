import './globals.css'

export const metadata = {
  title: '每日简报系统',
  description: '专业成长型每日简报 - 加密货币投资、AI 工具情报、跨境支付专业知识',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
