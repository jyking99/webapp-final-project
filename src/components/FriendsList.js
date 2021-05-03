import React, { useContext } from 'react';
import { StoreContext } from "context/StoreContext.js";
import { Link } from "react-router-dom";

import Header from "./Header";

import css from './FriendsList.module.css';
import publicUrl from "utils/publicUrl.js";

function FriendsList() {
    let {
        currentUserId, users, chats
    } = useContext(StoreContext);

    function getLastChat(uid) {
        console.log(chats);

        let returnme = chats.filter(c => (c.to === uid || c.from === uid))[0];
        console.log(returnme);

        if (typeof returnme === "undefined") {
            returnme = {
                text: "",
                datetime: ""
            };
        }

        return returnme;
    }

    function getList() {
        let maxChars = 40;
        return (
            <ul>
                {users.filter(user => user.id != currentUserId).map(
                    user =>
                        <li>
                            <Link to={"/chat/" + user.id}>
                                <img src={publicUrl(user.photo)} />
                                <div className={css.other}>
                                    <div className={css.nameTime}>
                                        <p>{user.name}</p>
                                        <p className={css.time}>{getLastChat(user.id).datetime.substring(11,16)}</p>
                                    </div>
                                    <p class={css.lastchat}>{(getLastChat(user.id).text.length >= maxChars) ? getLastChat(user.id).text.substring(0,maxChars) + "..." : getLastChat(user.id).text}</p>
                                </div>
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