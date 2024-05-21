import React from 'react';
import styles from './Navbar.module.css'
import SearchIcon from '@mui/icons-material/Search'
const Navbar = () => {
  return (
    <>
    <div className={styles.navbarParent}>
    <div className={styles.navbarlogo}>📹📽</div>
    <div className={styles.navbarTitle}>MOVIECATALOG</div>
    <div className={styles.navbarSearch}>
        <SearchIcon/>
    </div>
    </div>
    </>
  );
}

export default Navbar;
