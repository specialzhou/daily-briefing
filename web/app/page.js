'use client'
import { useState, useEffect } from 'react'

// 模拟数据 - 实际项目中会从 API 获取
const mockData = {
  date: '2026-03-09',
  sections: {
    crypto: {
      title: '加密货币投资',
      icon: '💰',
      color: 'crypto',
      items: [
        { id: 1, title: 'BTC 突破 $69,000，下一目标 $70K', summary: 'BTC 今日上涨 2.8%，突破关键阻力位 $68,500，成交量放大...', advice: '建议：关注突破确认，止损$67K', source: 'Binance', read: false, starred: false },
        { id: 2, title: 'ETH 链上活跃度创新高', summary: 'DeFi 活动增加，Gas 费上涨至 30 Gwei，ETH/BTC 汇率走强...', advice: '建议：观察 ETH/BTC 汇率变化', source: 'CoinGecko', read: false, starred: false },
        { id: 3, title: '山寨季信号初现', summary: '小市值币种开始活跃，SOL、AVAX 涨幅超 5%...', advice: '建议：控制仓位，不追高', source: 'CoinMarketCap', read: false, starred: false },
      ]
    },
    openclaw: {
      title: 'OpenClaw 推荐',
      icon: '🤖',
      color: 'openclaw',
      items: [
        { id: 1, title: '新插件：matrix-notify 发布', summary: '支持 Matrix 机器人通知，可配置定时推送...', advice: '建议：尝试集成到工作流', source: 'GitHub', read: false, starred: false },
        { id: 2, title: 'Skill 推荐：task-management', summary: '任务管理最佳实践，支持子任务、依赖关系...', advice: '建议：学习并应用到项目', source: 'OpenClaw Docs', read: false, starred: false },
      ]
    },
    claude: {
      title: 'Claude Code 推荐',
      icon: '💻',
      color: 'claude',
      items: [
        { id: 1, title: '高赞用法：批量代码审查', summary: '一次性审查多个 PR，自动生成审查意见...', advice: '建议：下周尝试应用到团队', source: 'Reddit', read: false, starred: false },
        { id: 2, title: '自动化测试生成技巧', summary: '提高测试覆盖率的 Prompt 模板...', advice: '建议：应用到当前项目', source: 'Discord', read: false, starred: false },
      ]
    },
    ai: {
      title: 'AI 情报',
      icon: '📰',
      color: 'ai',
      items: [
        { id: 1, title: 'GPT-5 传闻：参数规模可能达 10T', summary: '匿名消息源称 OpenAI 新一代模型训练中...', advice: '建议：关注官方发布', source: 'Twitter', read: false, starred: false },
        { id: 2, title: 'Cursor 3.0 发布', summary: 'AI 编辑器新增代码库理解功能...', advice: '建议：试用新功能', source: 'Cursor Blog', read: false, starred: false },
        { id: 3, title: 'OpenAI 新一轮融资', summary: '估值达 1500 亿美元，微软继续领投...', advice: '建议：关注行业格局变化', source: 'Bloomberg', read: false, starred: false },
      ]
    },
    payment: {
      title: '跨境支付训练营',
      icon: '🌍',
      color: 'payment',
      items: [
        { id: 1, title: '第 3 课：支付渠道接入流程', summary: '主流支付渠道对比（信用卡、本地钱包、银行转账），接入流程详解，费率结构分析...', advice: '建议：实践接入流程', source: '陈天宇宙', progress: 30, read: false, starred: false },
        { id: 2, title: '第 4 课：商户入驻审核要点', summary: 'KYC/KYB 流程、风险评估模型、反洗钱合规...', advice: '建议：整理入驻 checklist', source: '行业报告', progress: 0, read: false, starred: false },
      ]
    }
  }
}

export default function Home() {
  const [data, setData] = useState(null)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    // 从 LocalStorage 加载数据或初始化
    const saved = localStorage.getItem('daily-briefing-data')
    if (saved) {
      setData(JSON.parse(saved))
    } else {
      setData(mockData)
      localStorage.setItem('daily-briefing-data', JSON.stringify(mockData))
    }
  }, [])

  const toggleRead = (section, itemId) => {
    if (!data) return
    const newData = { ...data }
    const item = newData.sections[section].items.find(i => i.id === itemId)
    if (item) {
      item.read = !item.read
      setData({ ...newData })
      localStorage.setItem('daily-briefing-data', JSON.stringify(newData))
    }
  }

  const toggleStar = (section, itemId) => {
    if (!data) return
    const newData = { ...data }
    const item = newData.sections[section].items.find(i => i.id === itemId)
    if (item) {
      item.starred = !item.starred
      setData({ ...newData })
      localStorage.setItem('daily-briefing-data', JSON.stringify(newData))
    }
  }

  const addNote = (section, itemId) => {
    const note = prompt('添加笔记：')
    if (note) {
      alert('笔记已保存（演示版，实际会保存到 LocalStorage）')
    }
  }

  const convertToTask = (section, itemId) => {
    const item = data?.sections[section].items.find(i => i.id === itemId)
    if (item) {
      const priority = prompt('设置优先级 (高/中/低):', '中')
      if (priority) {
        alert(`任务已创建：${item.title}\n优先级：${priority}`)
      }
    }
  }

  if (!data) return <div className="min-h-screen flex items-center justify-center">加载中...</div>

  const colorMap = {
    crypto: 'border-crypto text-crypto',
    openclaw: 'border-openclaw text-openclaw',
    claude: 'border-claude text-claude',
    ai: 'border-ai text-ai',
    payment: 'border-payment text-payment',
  }

  const bgColorMap = {
    crypto: 'bg-crypto',
    openclaw: 'bg-openclaw',
    claude: 'bg-claude',
    ai: 'bg-ai',
    payment: 'bg-payment',
  }

  return (
    <div className="min-h-screen pb-20">
      {/* 顶部导航 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">📰 每日简报</h1>
          <div className="text-sm text-gray-500">{data.date}</div>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* 桌面端：网格布局 */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {Object.entries(data.sections).map(([key, section]) => (
            <SectionCard
              key={key}
              section={section}
              colorClass={colorMap[key]}
              bgColorClass={bgColorMap[key]}
              onToggleRead={toggleRead}
              onToggleStar={toggleStar}
              onAddNote={addNote}
              onConvertTask={convertToTask}
            />
          ))}
        </div>

        {/* 移动端：单栏布局 */}
        <div className="lg:hidden space-y-4">
          {Object.entries(data.sections).map(([key, section]) => (
            <SectionCard
              key={key}
              section={section}
              colorClass={colorMap[key]}
              bgColorClass={bgColorMap[key]}
              onToggleRead={toggleRead}
              onToggleStar={toggleStar}
              onAddNote={addNote}
              onConvertTask={convertToTask}
            />
          ))}
        </div>
      </main>

      {/* 底部导航（移动端） */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around py-3">
          <button
            className={`flex flex-col items-center ${activeTab === 'home' ? 'text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('home')}
          >
            <span className="text-xl">🏠</span>
            <span className="text-xs">首页</span>
          </button>
          <button
            className={`flex flex-col items-center ${activeTab === 'starred' ? 'text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('starred')}
          >
            <span className="text-xl">⭐</span>
            <span className="text-xs">收藏</span>
          </button>
          <button
            className={`flex flex-col items-center ${activeTab === 'archive' ? 'text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('archive')}
          >
            <span className="text-xl">📁</span>
            <span className="text-xs">归档</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

function SectionCard({ section, colorClass, bgColorClass, onToggleRead, onToggleStar, onAddNote, onConvertTask }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{section.icon}</span>
          <h2 className="text-lg font-semibold">{section.title}</h2>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${bgColorClass} text-white`}>
          {section.items.filter(i => !i.read).length} 条新内容
        </span>
      </div>

      <div className="space-y-4">
        {section.items.map(item => (
          <div key={item.id} className={`border-l-4 ${colorClass.split(' ')[0]} pl-3 py-2 ${item.read ? 'opacity-50' : ''}`}>
            <h3 className={`font-medium ${item.read ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{item.summary}</p>
            
            {item.progress !== undefined && (
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>学习进度</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${bgColorClass} h-2 rounded-full`} style={{ width: `${item.progress}%` }}></div>
                </div>
              </div>
            )}

            <div className="mt-2 text-sm">
              <span className="text-primary">👉 {item.advice}</span>
            </div>

            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-400">📎 {item.source}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => onToggleRead(section, item.id)}
                  className={`text-sm ${item.read ? 'text-green-500' : 'text-gray-400 hover:text-green-500'}`}
                  title="标记已读"
                >
                  {item.read ? '✓' : '○'}
                </button>
                <button
                  onClick={() => onToggleStar(section, item.id)}
                  className={`text-sm ${item.starred ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                  title="收藏"
                >
                  {item.starred ? '★' : '☆'}
                </button>
                <button
                  onClick={() => onAddNote(section, item.id)}
                  className="text-sm text-gray-400 hover:text-blue-500"
                  title="笔记"
                >
                  📝
                </button>
                <button
                  onClick={() => onConvertTask(section, item.id)}
                  className="text-sm text-gray-400 hover:text-purple-500"
                  title="转任务"
                >
                  ✓
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
