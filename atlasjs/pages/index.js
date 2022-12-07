import Background from '../components/Background'
import { Particle } from '../components/particle'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.particles}>
        <Particle />
      </div>
      <Background/>
    </div>
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
