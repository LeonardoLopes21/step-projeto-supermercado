

import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navlink}>Home</Link>
      <Link to="/Produtos" className={styles.navlink}>Produtos</Link>
      <Link to="/Carrinho" className={styles.navlink}>Carrinho</Link>
    </nav>
  );
}

export default Navbar;
