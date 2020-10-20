import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button} from 'antd'
import Header from '../components/header/index'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>呵呵呵呵呵</title>
      </Head>
      <Header></Header>
      <div><Button>我是按钮</Button></div>
    </div>
  )
}
