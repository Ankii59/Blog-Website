import React from 'react'
import Image from 'next/image'
import styles from './featured.module.css'
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey , GeekDive</b> here Discover my stories and creative ideas
            </h1>Featured
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem mera naam toora mera kaam</h1>
                    <p className={styles.pstDesc}>
                        Lorem sai hu jante nhi tu mjue iss liye chod rha hu nhi tou kaat
                        Lorem sai hu jante nhi tu mjue iss liye chod rha hu nhi tou kaat
                        Lorem sai hu jante nhi tu mjue iss liye chod rha hu nhi tou kaat
                        Lorem sai hu jante nhi tu mjue iss liye chod rha hu nhi tou kaat daalta

                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured