import Link from 'next/link'
import styles from './not-found.module.css'
 
export default function NotFound() {
  return (
    <div className={styles.notfoundContainer}>
      <h1>Not found</h1>
      <p>Could not find the page you are looking for</p>
      <Link href="/" className={styles.link}>Return Home</Link>
    </div>
  )
}