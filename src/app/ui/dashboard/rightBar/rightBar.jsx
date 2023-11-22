import { MdPlayCircleFilled } from 'react-icons/md'
import styles from './rightBar.module.css'
import Image from 'next/image'

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>
            🔥 Available Now
          </span>
          <h3 className={styles.title}>
            How to use the new admin dashboard?
          </h3>
          <span className={styles.subtitle}>
            Takes 4 minutes to learn
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores quasi repudiandae voluptatibus necessitatibus. Repudiandae.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      {/* Second Item */}
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>
            🔥 Available Now
          </span>
          <h3 className={styles.title}>
            How to use the new admin dashboard?
          </h3>
          <span className={styles.subtitle}>
            Takes 4 minutes to learn
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores quasi repudiandae voluptatibus necessitatibus. Repudiandae.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightBar