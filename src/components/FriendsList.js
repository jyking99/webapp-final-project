import React, { useContext } from 'react';
import { StoreContext } from "context/StoreContext.js";
import { Link } from "react-router-dom";

import Header from "./Header";

import css from './FriendsList.module.css';

function FriendsList() {
    let {
        currentUserId, users
    } = useContext(StoreContext);

    function getList() {
        return (
            <ul>
                {users.filter(user => user.id != currentUserId).map(
                    user =>
                        <li>
                            <Link to={"/chat/" + user.id}>
                                {user.name}
                            </Link>
                        </li>
                )}
            </ul>
        )
    }

    return (
        <div>
            <div className={css.container}>
                {getList()}
            </div>
        </div>
    );
}

export default FriendsList;