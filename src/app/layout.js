'use client'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import styles from '../styles/layout.module.css'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const [devBlogText, setDevBlogText] = useState('DevBlog')
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navbar}>
          <div className={styles.navleft}>
            thingy
          </div>
          <div className={styles.navright}>
            <span onClick={() => {
              setDevBlogText("Nice Try")
            }}>
              {devBlogText}
            </span>
            <span >
              <a href="https://www.linkedin.com/in/harry-thomas-ba618025a/">Contact Me</a>
            </span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
