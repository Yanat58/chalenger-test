import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Searchbar from '../Searchbar'
import styles from './styles.module.css'
import AddItemButton from '../AddItemButton';

export default function Header() {
  return (
    <section className={styles.section}>
      <div>
        <Logo />
        <button className={styles.catalogBtn}>Каталог</button>
        <Searchbar />
        <Link to="/cart">Cart</Link>
      </div>
      <div>
        <Link to="/login">Увійти</Link>
        <AddItemButton/>
      </div>
    </section>
  );
}
