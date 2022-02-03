import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, TextField} from '@mui/material'


function Suggested() {
  return (

  )
}

function Row() {
  return (
    <div>
    <TextField placeholder="Guess"/>  &nbsp; &nbsp; <TextField placeholder="Output"/>
    <br/>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wordle</title>
        <meta name="description" content="wordle helper app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wordle Helper!
        </h1>

        <p className={styles.description}>
          1. Enter the word, followed by the output
<br/><br/>
          b -> black
          <br/>
          y -> yellow
          <br/>
          g -> green
          <br/><br/>
          2. Suggested words will appear at the bottom
        </p>

        <div className={styles.grid}>
          <Row/>
          <Row/>
          <Row/>
          <Row/>
          <Row/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Coder Gautam
        </a>
      </footer>
    </div>
  )
}
