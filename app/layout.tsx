// Sarthak: Consolidating fonts for better load performance
import { Geist_Mono, Silkscreen } from "next/font/google"
import { GeistPixelLine } from "geist/font/pixel"
import "./globals.css"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
})

const geistPixelLine = GeistPixelLine

export const metadata: Metadata = {
  title: "CodePath CS | Student Learning Hub",
  description:
    "A peer-to-peer Computer Science learning hub created by students, for students. Master programming, algorithms, web development, and more. Developed by Abishek Mohan and Sarthak bagal.",
  authors: [{ name: "Abishek Mohan" }, { name: "Sarthak bagal" }],
  keywords: [
    "computer science",
    "programming",
    "Abishek Mohan",
    "Sarthak bagal",
    "FBLA",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${geistPixelLine.variable}`}>
      <body
        className={`${geistMono.variable} ${silkscreen.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
