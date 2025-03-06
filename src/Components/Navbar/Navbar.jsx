import logo from '../../../public/Navbar/house-.png'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      <img src={logo} alt="Rent" className={styles.logo} />
      </a>
      <ul>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About Us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/Houses">Houses</NavLink>
        </li>
        <li>
          <NavLink to="/Contact us">Contact Us</NavLink>
        </li>
      </ul>
    </nav> 
  )
}

export default Navbar