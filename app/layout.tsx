import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StillGood — 这个还能用吗？',
  description: '快速查询食品开封后的保质期，告诉你在有效期限内是否还能继续使用。',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✅</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="min-h-screen bg-stone-50">{children}</body>
    </html>
  )
}
