import Link from 'next/link'
import styles from './NavBar.module.scss'


export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={'/'}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/teddie'}>Teddie</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/toma'}>Toma</Link>
        </li>
      </ul>
    </nav>
  )
}