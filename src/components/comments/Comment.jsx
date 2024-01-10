import Link from "next/link"
import styles from "./comments.module.css"
import Image from "next/image"

const Comment = () => {

  const status = "authenticated"
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder="write a commnet.." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to Write an Commnet </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>Night Agents</span>
              <span className={styles.username}>10.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Molestiae consequatur explicabo culpa impedit reiciendis
            fuga magnam, ipsa ducimus dignissimos quaerat?</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>Night Agents</span>
              <span className={styles.username}>10.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Molestiae consequatur explicabo culpa impedit reiciendis
            fuga magnam, ipsa ducimus dignissimos quaerat?</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>Night Agents</span>
              <span className={styles.username}>10.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Molestiae consequatur explicabo culpa impedit reiciendis
            fuga magnam, ipsa ducimus dignissimos quaerat?</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>Night Agents</span>
              <span className={styles.username}>10.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Molestiae consequatur explicabo culpa impedit reiciendis
            fuga magnam, ipsa ducimus dignissimos quaerat?</p>
        </div>
      </div>
    </div>
  )
}

export default Comment