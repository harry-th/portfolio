'use client'
import { useEffect, useRef, useState } from 'react'
import styles from '../src/styles/content.module.css'
import Analytics from './Analytics'

const Content = ({ content }) => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 100)
    }, [])

    const [typeNumber, setTypeNumber] = useState({})
    const typeStarted = useRef({})
    let typeQueue = useRef([])

    const typeEffect = (current, cap, typeDelay, index) => {
        if (current === 0) {
            setTimeout(() => {
                if (current <= cap) {
                    setTimeout(() => {
                        setTypeNumber(prev => {
                            prev[index] = current
                            return { ...prev }
                        })
                        typeEffect(current + 1, cap, typeDelay, index)
                    }, 50)
                }
            }, typeDelay)
        } else if (current <= cap) {
            setTimeout(() => {
                setTypeNumber(prev => {
                    prev[index] = current
                    return { ...prev }
                })
                typeEffect(current + 1, cap, typeDelay, index)
            }, 50)
        }
        else if (typeQueue.current.length > 0) {
            typeEffect(typeQueue.current[0].current, typeQueue.current[0].cap, 100, typeQueue.current[0].index)
            typeQueue.current.shift()
        }
    }


    const startType = (cap, typeDelay, index) => {
        if (typeDelay === "after") {
            typeStarted.current[index] = true
            typeQueue.current.push({ current: 0, cap, typeDelay, index })
        } else {
            typeStarted.current[index] = true
            typeEffect(0, cap, typeDelay, index)
        }
    }
    const createTextForTypingEffect = (content, typeDelay, typeDirection, id) => {
        if (!typeStarted.current[id]) startType([...content].length, typeDelay, id)

        return [...content].map((letter, letterindex) => {
            return (
                <span
                    className={[styles[typeNumber[id] > letterindex ? "typewritten" : "untypewritten"], styles.typewriting, typeDirection && styles[typeDirection]].join(' ')}
                    key={letter + letterindex + id}>
                    {letter}
                </span>
            )
        })
    }
    const customComponents = {
        Analytics: (api, transitionDelay) => <Analytics api={api} transitionDelay={transitionDelay} />
    }
    return (
        <div className={`${styles.contentElement} ${styles[active ? "active" : "inactive"]}`}>
            {content.content.map((item, mainIndex) => {
                return (
                    <div
                        className={item.type.map(el => styles[el]).join(" ")}
                        key={item.type[0] + mainIndex}
                        style={{ height: item.height }}>
                        {item?.value?.component ?
                            <span
                                className={(item?.animations || []).map(el => styles[el]).join(" ")}
                                style={{ transitionDelay: item.transitionDelay, transitionProperty: 'opacity, top, left' }}
                            >
                                {customComponents[item?.value?.component]("google-search-console", item.transitionDelay[0])}
                            </span>
                            :
                            Array.isArray(item.value) ? item.value.map((i, index) => {
                                return (
                                    <p
                                        className={(item?.animations[index] || []).map(el => styles[el]).join(" ")}
                                        style={{ transitionDelay: item.transitionDelay[index], transitionProperty: 'opacity, top, left' }}
                                        key={i + index}>
                                        {item?.typeIn && item?.typeIn[index] ? createTextForTypingEffect(i, item.typeDelay[index], item?.typeDirection ? item.typeDirection[index] : null, mainIndex.toString() + "-" + index.toString()) : i}
                                    </p>
                                )
                            }) : <span
                                className={(item?.animations || []).map(el => styles[el]).join(" ")}
                                style={{ transitionDelay: item.transitionDelay, transitionProperty: 'opacity, top, left' }}
                            >
                                {item?.typeIn && item?.typeIn ? createTextForTypingEffect(item.value, item.typeDelay, item?.typeDirection, mainIndex.toString()) : item.value}
                            </span>}
                    </div>
                )
            })}
        </div>
    )
}

export default Content