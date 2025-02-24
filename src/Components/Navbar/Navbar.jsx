import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Real Estate</h1>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About Us</Link>
        </li>
        <li>
          <Link>Houses</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </ul>
    </nav> 
  )
}

export default Navbar