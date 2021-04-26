import React from 'react';
import css from './Header.module.css';

function Header(props) {
    return (
        <div className={css.header}>
            <div className={css.headerItem}>
                <button>
                    <h2>{(props.title == null) ? "Project name" : props.title}</h2>
                </button>
            </div>
        </div>
    );
}

export default Header;