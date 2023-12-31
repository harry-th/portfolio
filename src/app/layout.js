import '../styles/globals.css'
import { Inter } from 'next/font/google'
import styles from '../styles/layout.module.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portolio',
  description: 'Portfolio Harry Thomas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navbar}>
          <div className={styles.navleft}>
            harry thomas
          </div>
          <div className={styles.navright}>
            <span>
              DevBlog
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
