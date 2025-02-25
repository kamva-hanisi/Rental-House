import logo from '../../../public/Navbar/logo.png'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      <img src={logo} alt="Rent" className={styles.logo} />
      </a>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About Us">About Us</Link>
        </li>
        <li>
          <Link to="/Houses">Houses</Link>
        </li>
        <li>
          <Link to="/Contact us">Contact Us</Link>
        </li>
      </ul>
    </nav> 
  )
}

export default Navbar