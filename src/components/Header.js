import React from 'react';
import css from './Header.module.css';
import publicUrl from 'utils/publicUrl';

function Header() {
    return (
        <div className={css.header}>
            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('/assets/camera.svg')} alt="Home" />
                </button>
            </div>
            <div className={css.headerItem}>
                <button>
                    <h2>Project name</h2>
                </button>
            </div>
            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('/assets/message.svg')} alt="Home" />
                </button>
            </div>
        </div>
    );
}

export default Header;