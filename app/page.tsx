'use client'

import { useState, useRef, useEffect } from 'react'
import { searchFoods, foodDatabase, type FoodItem } from '@/data/foods'

function getDaysLabel(days: number): string {
  if (days === 0) return '不易变质'
  if (days === 1) return '1 天'
  if (days < 30) return `${days} 天`
  if (days < 365) return `${Math.round(days / 30)} 个月`
  return `${Math.round(days / 365)} 年+`
}

function getUrgency(days: number): 'fresh' | 'warning' | 'danger' {
  if (days === 0) return 'fresh'
  if (days > 60) return 'fresh'
  if (days > 14) return 'warning'
  return 'danger'
}

const urgencyStyles = {
  fresh: {
    badge: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-400',
    label: '状态良好',
  },
  warning: {
    badge: 'bg-amber-100 text-amber-700',
    dot: 'bg-amber-400',
    label: '尽快使用',
  },
  danger: {
    badge: 'bg-red-100 text-red-700',
    dot: 'bg-red-400',
    label: '临近过期',
  },
}

function ResultCard({ item }: { item: FoodItem }) {
  const urgency = getUrgency(item.expirationDays)
  const styles = urgencyStyles[urgency]

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${styles.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
              {styles.label}
            </span>
            <span className="text-xs text-stone-400">{item.category}</span>
          </div>
          <h3 className="text-lg font-semibold text-stone-800 leading-tight">{item.name}</h3>
          <p className="text-sm text-stone-500 mt-0.5">开封后：{item.storage}</p>
        </div>

        <div className="text-right shrink-0">
          <div className="text-2xl font-bold text-stone-800 leading-none">
            {getDaysLabel(item.expirationDays)}
          </div>
          {item.expirationDays > 0 && (
            <div className="text-xs text-stone-400 mt-1">开封后</div>
          )}
        </div>
      </div>

      {item.tips && (
        <div className="mt-4 pt-4 border-t border-stone-100">
          <p className="text-sm text-stone-600 leading-relaxed">💡 {item.tips}</p>
        </div>
      )}
    </div>
  )
}

function CategoryPills({ items, onSelect }: { items: FoodItem[]; onSelect: (name: string) => void }) {
  const categories = Array.from(new Set(items.map((i) => i.category)))

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="px-3 py-1.5 text-sm bg-white border border-stone-200 rounded-full text-stone-600 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default function Home() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<FoodItem[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSearch(q: string) {
    setQuery(q)
    if (q.trim()) {
      const found = searchFoods(q)
      setResults(found)
      setHasSearched(true)
    } else {
      setResults([])
      setHasSearched(false)
    }
  }

  function handleCategorySelect(cat: string) {
    setQuery(cat)
    setResults(foodDatabase.filter((i) => i.category === cat))
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <span className="font-bold text-lg text-stone-800 tracking-tight">StillGood</span>
          </div>
          <span className="text-sm text-stone-400">食品保质期查询</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-stone-50 border-b border-emerald-100">
        <div className="max-w-2xl mx-auto px-4 pt-14 pb-10 text-center">
          <h1 className="text-4xl font-extrabold text-stone-800 mb-3 tracking-tight">
            这个还能用吗？
          </h1>
          <p className="text-stone-500 mb-8 text-lg">
            搜索任何开封后的食品，快速得知是否还能继续使用
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="例如：番茄酱、牛奶、面包..."
              className="w-full pl-12 pr-4 py-4 text-lg bg-white border border-stone-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-300 transition-all placeholder:text-stone-400"
            />
            {query && (
              <button
                onClick={() => handleSearch('')}
                className="absolute inset-y-0 right-4 flex items-center text-stone-400 hover:text-stone-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {!hasSearched && (
            <div className="mt-6">
              <p className="text-sm text-stone-400 mb-3">或按分类浏览</p>
              <CategoryPills items={foodDatabase} onSelect={handleCategorySelect} />
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <main className="flex-1 max-w-2xl mx-auto px-4 py-8 w-full">
        {hasSearched && results.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl mb-4 block">🔍</span>
            <p className="text-stone-500 mb-2">没有找到相关食品</p>
            <p className="text-sm text-stone-400">试试其他关键词，比如&quot;牛奶&quot;、&quot;面包&quot;</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-stone-400 mb-4">
              找到 {results.length} 个相关结果
            </p>
            {results.map((item) => (
              <ResultCard key={item.name} item={item} />
            ))}
          </div>
        )}

        {!hasSearched && (
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
                🔥 常见问题
              </h2>
              <div className="space-y-2">
                {foodDatabase.slice(0, 6).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleSearch(item.keywords[0])}
                    className="w-full text-left px-4 py-3 bg-white border border-stone-200 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
                  >
                    <span className="text-stone-700 group-hover:text-emerald-700 font-medium">
                      {item.name}
                    </span>
                    <span className="text-stone-400 text-sm ml-2">→</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
              <h3 className="font-semibold text-emerald-800 mb-2">💡 StillGood 与其他工具的区别</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• 无需注册，打开即用</li>
                <li>• 专注回答&quot;还能不能用&quot;，而非库存管理</li>
                <li>• 覆盖食品、日用品多品类</li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-6 text-center">
        <p className="text-xs text-stone-400">
          数据仅供参考，具体保质期受品牌、存储条件影响较大
        </p>
      </footer>
    </div>
  )
}
