import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import publicUrl from 'utils/publicUrl.js';
import Header from "./Header";

import { StoreContext } from "context/StoreContext.js";

import css from './Profile.module.css';

function Profile() {
    let {
        users, currentUserId
    } = useContext(StoreContext);

    let { id } = useParams();
    let userId = (id == null) ? currentUserId : id;
    let user = users.find(usr => usr.id === userId);

    return (
        <div className={css.container}>
            <Header title="Profile" />
            <div className={css.head}>
                <img src={publicUrl(user.photo)} alt="bigFace" />
                <h2>{user.id}</h2>
            </div>
            <div className={css.content}>
                <div className={css.temp}>Topics...</div>
                <div className={css.temp}>Preferences...</div>
            </div>
        </div>
    )
}

export default Profile;