import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import React from 'react';
import Nav from "@/components/nav";
import "@/styles/global.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Component from "./footer";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Brick-ly",
  description: "Brickly is a crowdfunding protocol built on polygon.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XQH33W31KN"></script>
<script id="google-analytics" dangerouslySetInnerHTML={{
  __html:
  `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XQH33W31KN');
  `
}}>


</script>
        <link rel="icon" type="image/svg+xml" href="/navbar/BricklyIcon.svg" />
      </head>
      <body className=" font-sans antialiased overflow-x-hidden h-[calc(100dvh)]">
        <Theme>
            
        <Nav />
      <main className="scroll-smooth flex min-h-screen overflow-x-hidden flex-col py-16 sm:px-12 grow">{children}</main>
              <footer className="p-8 text-center lg:h-72 bg-brickly50/70 ">
               <Component />
              </footer>
              </Theme>

      </body>
    </html>
  )
}
