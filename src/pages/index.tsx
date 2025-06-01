import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '../layouts/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Train Driver 2 English Tools</title>
        <meta name="description" content="Tools for sim https://td2.info.pl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Welcome to the English Tools website for <a href="https://td2.info.pl">Train Driver 2!</a>
        </h1>

        <p className={styles.description}>
          Here you can find a few useful gameplay tools!
        </p>

        <div className={styles.grid}>
          <Link href="train-number">
            <a className={styles.card}>
              <h2> Random Train Number Generator &rarr;</h2>
              <p>Generate a random train number for TD2!</p>
            </a>
          </Link>
        </div>
      </main>
    </MainLayout>
  )
}

export default Home
