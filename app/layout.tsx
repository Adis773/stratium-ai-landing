import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Stratium AI — Самый дешёвый и автономный ИИ-агент для Windows',
  description: 'Stratium AI — автономный ИИ-агент, который полностью управляет вашим компьютером. Делегируйте реальные задачи и позволяйте ему работать самостоятельно до 10 дней. Самый доступный и лучший AI-агент на рынке. Скачать для Windows бесплатно.',
  keywords: [
    'автономный ИИ агент', 'AI агент для Windows', 'бесплатный ИИ ассистент',
    'автоматизация компьютера', 'искусственный интеллект на пк',
    'stratium ai', 'stratium', 'open source AI agent',
    'бесплатный AI агент', 'дешёвый AI агент',
    'autonomous AI agent', 'AI computer control', 'free AI agent for Windows',
    'open webui agent', 'mcp agent', 'windows automation AI',
  ],
  authors: [{ name: 'Stratium AI' }],
  creator: 'Stratium AI',
  publisher: 'Stratium AI',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Stratium AI',
    title: 'Stratium AI — Самый дешёвый и автономный ИИ-агент',
    description: 'Автономный ИИ-агент для Windows. Делегируйте задачи и получайте результат. Работает до 10 дней без участия человека.',
    url: 'https://stratium-ai.vercel.app',
    images: [{ url: '/apple-icon.png', width: 180, height: 180 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stratium AI — Автономный ИИ-агент',
    description: 'Самый доступный автономный AI агент для Windows. Управляет компьютером, выполняет задачи, пишет код.',
    images: ['/apple-icon.png'],
  },
  icons: {
    icon: '/icon-light-32x32.png',
    shortcut: '/icon-light-32x32.png',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://stratium-ai.vercel.app'),
  alternates: {
    canonical: 'https://stratium-ai.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
