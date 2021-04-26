import React from 'react';
import css from './ChatHeader.module.css';
import { Link } from "react-router-dom";

function ChatHeader(props) {
    return (
        <div className={css.header}>
            <div>
                <Link to="/">
                    <p>＜</p>
                </Link>
            </div>
            <div className={css.headerItem}>
                <button>
                    <h2>{(props.title == null) ? "Project name" : props.title}</h2>
                </button>
            </div>
        </div>
    );
}

export default ChatHeader;