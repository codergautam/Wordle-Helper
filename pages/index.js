import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, TextField} from '@mui/material'
import {useState } from 'react'
import Solver from 'wordle-solver'



function Suggested(props) {
  var data = props.data
  var solver = new Solver()

  data.forEach((e) => {
    if(e[0].length == 5 && e[1].length == 5) solver.guess(e[0], e[1])
  })



  return (
    <div>
    {solver.getNextBestGuesses(5).join(", ")}
    <br/>
      {solver.oldSolver(5).join(", ")}
      </div>
  )
}

function Row(props) {
  return (
    <div>
    <TextField onChange = {(e) => {
      if(e.target.value.length == 5 || e.target.value.length == 0) props.onChange(e.target.value, 0)
    }} placeholder="Guess"/>  &nbsp; &nbsp; <TextField  onChange = {(e) => {
      if(e.target.value.length == 5 || e.target.value.length == 0) props.onChange(e.target.value, 1)
    }} placeholder="Output"/>
    <br/>
    </div>
  )
}

export default function Home() {
  var [rows, setRows] = useState([["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]]);
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
          <Row onChange={(e,i) => {
            var yo = [...rows];
            yo[0][i] = e
            setRows(yo)
          }}/>
          <Row onChange={(e,i) => {
            var yo = [...rows];
            yo[1][i] = e
            setRows(yo)
          }}/>
          <Row onChange={(e,i) => {
            var yo = [...rows];
            yo[2][i] = e
            setRows(yo)
          }}/>
          <Row onChange={(e,i) => {
            var yo = [...rows];
            yo[3][i] = e
            setRows(yo)
          }}/>
          <Row onChange={(e,i) => {
            var yo = [...rows];
            yo[4][i] = e
            setRows(yo)
          }}/>
          <Row onChange={(e,i) => {
            var yo = [...rows];
            yo[5][i] = e
            setRows(yo)
          }}/>
        </div>
          
          <div>
          <br/>
        <h2>Suggested Words:</h2>
          <Suggested data= {rows}/>
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
