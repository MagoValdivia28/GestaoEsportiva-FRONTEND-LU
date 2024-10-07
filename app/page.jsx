
import Image from 'next/image'
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.container}>
        <div className={styles.opacity}>
            <div>
                <Image src="/logo.png" alt="logo" width={100} height={100} />
            </div>
        <p>ahdsgagsdahsk</p>
        </div>
    </main>
  )
}

