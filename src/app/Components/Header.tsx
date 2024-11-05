import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links}>
        <li>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li>
            <Link href="/gameboy" className={styles.link}>Gameboy</Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>About</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}
export default Header