import Head from 'next/head'
import { useSelector } from 'react-redux'
import FactorChart from '../components/charts/factorChart'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (

      <main className={styles.main}>
        <FactorChart/>
      </main>

  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://api3.markgold.ir/api/get-anbar');
//   const products = await res.json()

//   return {
//     props: {
//       products,
//     },
//   }
// }
