import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

type MainProps = {
  children: ReactNode
}

export const MainLayout = ({children}: MainProps) => {

    return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}  