import '../styles/globals.css'
import { Inter } from '@next/font/google'
import GlobalNav from '@/ui/Global.Nav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// The app directory must include a root layout.
//The root layout must define <html> and <body> tags since Next.js does not automatically create them.
//You can use the built-in SEO support to manage <head> HTML elements, for example, the <title> element.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head />

      <body>
        <GlobalNav/>
      </body>
    </html>
  )
}
