import type { Metadata } from 'next'
import { merriweather, fraunces, firaCode } from '@/lib/fonts'
import './globals.css'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Minimal Single Page Portfolio',
  description: 'Created with Fronted Tribe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`antialiased bg-neutral-900 text-neutral-200 ${merriweather.variable} ${fraunces.variable} ${firaCode.variable}`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  )
}
