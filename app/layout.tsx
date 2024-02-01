import NextThemeProvider from "@/components/next-theme-provider";
import "@/styles/globals.css";
import "@/styles/typography.css";
import { ClerkProvider } from "@clerk/nextjs"
import { Rubik } from "next/font/google"

/**DEFAULT FONT */
const rubik = Rubik({
    subsets: ['latin'],
    display: "auto"
  })
  
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
  <ClerkProvider>
      <html lang="en" className={rubik.className}>
        <body>
        <NextThemeProvider>
            {children}
        </NextThemeProvider>
         </body>   
      </html>
  </ClerkProvider>
    )
  }