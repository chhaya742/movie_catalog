// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Navbar.module.css';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className={styles.navbarParent}>
      <div className={styles.navbarLogo}>🎥🎬</div>
      <Link to="/" className={styles.navbarTitle}>THE MOVIECATALOG</Link>
      <div className={styles.navbarSearch}>
        <SearchIcon />
        <input
          type="search"
          placeholder="Search a movie..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className={styles.navbarLinks}>
        <Link to="/login">Login</Link> {/* Add link to login page */}
      </div>
    </div>
  );
};

export default Navbar;
