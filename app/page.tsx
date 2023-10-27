import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>
        SO, YOU WANT TO TRAVEL TO
      </h3>
      <h1>
        SPACE
      </h1>
      <div className={styles.paragraph}>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we'll give you a truly out of this world experience!
        </p>
      </div>
      <div className={styles.button}>
        <Link href={"/destination"}>
          EXPLORE
        </Link>
      </div>
    </main>
  )
}
