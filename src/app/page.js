'use client'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Content from '../../components/content'
import { useState } from 'react'
import Script from 'next/script'
import BoatGame from '@/boatgame/App'
import About from "../content/About"
import Portfolio from "../content/Portfolio"
import PipeTobaccoSearch from "../content/PipeTobaccoSearch"
import BoatGameContent from "../content/BoatGame"
export default function Home() {
  const content = {
    About,
    Portfolio,
    PipeTobaccoSearch,
    BoatGameContent,
  }
  const [contentKey, setContentKey] = useState("About")
  const [menuIndex, setMenuIndex] = useState(0)
  return (
    <div className={styles.container}>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="https://accounts.google.com/gsi/client"
      />
      <div className={styles.home}>
        <div className={styles.homeNavigation}>
          {menuIndex - 1 >= 0 ?
            <button onClick={() => {
              setContentKey(Object.keys(content)[menuIndex - 1])
              setMenuIndex(prev => prev - 1)
            }}>
              {
                "back: " + Object.keys(content)[menuIndex - 1]
              }
            </button> : <button>back</button>
          }
          <button onClick={() => {
            let value = Object.values(content)[menuIndex]
            if (value.active) {
              if (value.active.type === "link") {
                window.open(
                  `${value.active.link}`,
                  '_blank' // <- This is what makes it open in a new window.
                )
              }
              if (value.active.type === "component") {
                setContentKey(value.active.name)
              }
            }
          }}>
            {
              Object.values(content)[menuIndex]?.active?.text || Object.keys(content)[menuIndex]
            }
          </button>
          <button onClick={() => {
            setContentKey(Object.keys(content)[menuIndex + 1])
            setMenuIndex(prev => prev + 1)
          }}>
            {
              ` next: ${Object.keys(content)[menuIndex + 1] || "nothing..."}`
            }
          </button>
        </div>
        <div className={styles.contentContainer}>

          {contentKey !== "boatgame" ? Object.keys(content).map((item => {
            return (
              <div className={contentKey === item ? styles.active : undefined} key={item}>
                {contentKey === item && <Content content={content[item]} />}
              </div>
            )
          }
          )) : <BoatGame />
          }
        </div>
      </div>
    </div>
  )
}
