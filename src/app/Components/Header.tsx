'use client'
import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  
const currentPath = usePathname()

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link href="/" className={`${styles.link} ${currentPath === '/' && styles.activeLink}`}>Home</Link>
          </li>
          <li>
            <Link href="/gameboy" className={`${styles.link} ${currentPath === '/gameboy' && styles.active}`}>Gameboy</Link>
          </li>
          <li>
            <Link href="/about" className={`${styles.link} ${currentPath === '/about' && styles.active}`}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header