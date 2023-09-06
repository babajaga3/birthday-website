import Link from 'next/link'
import Image from 'next/image'
import styles from './NavBar.module.scss'


export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image src='/logo.gif' alt="logo" width={100} height={100} />
      </Link>
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