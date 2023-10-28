import Link from 'next/link'
import styles from './page.module.scss'
import { Barlow, Barlow_Condensed } from 'next/font/google'


const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '200'
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: '200'
})

export default function Home() {
  return (
    <main className={styles.main}>
      <h3 className={barlowCondensed.className}>
        SO, YOU WANT TO TRAVEL TO
      </h3>
      <h1>
        SPACE
      </h1>
      <div className={styles.paragraph}>
        <p className={barlow.className}>
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
