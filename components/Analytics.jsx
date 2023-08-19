import { useEffect, useState } from 'react'
import styles from '../src/styles/analytics.module.css'
const formatGSCDATA = (data) => {

}
const Analytics = ({ api, transitionDelay }) => {
    const [active, setActive] = useState(false)
    const [data, SetData] = useState()
    useEffect(() => {
        fetch(`/api/${api}`, {
            next: {
                revalidate: 86400
            }
        })
            .then((response) => response.json())
            .then((response) => {
                //this would have to be a custom function if this component were really re-usable 
                let data = response.rows[0]
                data.position = Math.round(data.position * 100) / 100
                data.ctr = (Math.round(data.ctr * 10000) / 100).toString() + "%"
                SetData(data)
            })
    }, [api])
    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, Number(transitionDelay.replace("s", "")) * 1000)
    }, [transitionDelay])
    return (
        <div className={`${styles.analyticsContainer} ${styles[active ? "active" : "inactive"]}`}>
            {data && Object.entries(data).map((item, index) => {
                return (
                    <div className={styles.analyticsSection} key={item[0]}
                        style={{
                            transitionDelay: `${(index * 0.2).toString() + "s"}`,
                            transitionProperty: 'opacity, top, left'
                        }}>
                        <div>
                            <span className={styles.sectionTitle}>
                                {item[0]}
                            </span>
                            <div className={styles.analyticsBox}>
                                {item[1]}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Analytics