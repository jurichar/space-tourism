import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Space
      </h1>
      <p>
        So, you want to travel to
      </p>
      <p>
        Let's face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we'll give you a truly out of this world experience!
      </p>
      <Link href={"/destination"}>
        Explore
      </Link>
    </main>
  )
}
