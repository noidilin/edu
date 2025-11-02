import type { Metadata } from 'next'
import { firaCode, fraunces, merriweatherSans } from '@/lib/fonts'
import './globals.css'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Modern Design Tool Landing Page',
  description: 'Created with the help of Frontend Tribe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'bg-background font-sans text-foreground antialiased',
          merriweatherSans.variable,
          fraunces.variable,
          firaCode.variable,
        )}
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
