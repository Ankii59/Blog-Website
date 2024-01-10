import Image from 'next/image';
import React from 'react';
import styles from '../[slug]/singlePage.module.css';
import Menu from '../../components/Menu/Menu';
import Comment from '../../components/comments/Comment';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Mai mera bhai ....khud ka bhai mai hu</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Boogman</span>
                            <span className={styles.date}>09.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero iste
                            accusamus officia hic deleniti! Blanditiis
                        </p>
                        <h2>
                            Lorem ipsum dolor
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero iste
                            accusamus officia hic deleniti! Blanditiis,
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero
                            quasi? Rerum quo qui at dolores totam!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero iste
                            accusamus officia hic deleniti! Blanditiis
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comment />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
