import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>09.01.2024 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Are you Planning for Beach Holiday </h1>
                </Link>
                <p className={styles.desc}>What making you stop come to lakhshdeep.Natural Beauty
                    with calm enviornment and you peace of mind with
                    mother nature . SO hurry up we are waiting for you
                    with coconut water and some sunscream ! </p>
                    <Link href="/" className={styles.link}>Read More</Link>
            </div>

        </div>
    )
}
