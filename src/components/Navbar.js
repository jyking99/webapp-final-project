import React from 'react';
import { Link } from "react-router-dom";
import publicUrl from 'utils/publicUrl';

import css from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <Link to="/">
                    <img src={publicUrl('/assets/home.svg')} alt="Home" />
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to="/explore">
                    <img src={publicUrl('/assets/explore.svg')} alt="Explore" />
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to="/profile">
                    <img src={publicUrl('/assets/profile.svg')} alt="Home" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;

