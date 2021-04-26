import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import publicUrl from 'utils/publicUrl.js';
import Header from "./Header";

import { StoreContext } from "context/StoreContext.js";

import css from './Profile.module.css';

function Profile() {
    let {
        users, currentUserId, posts
    } = useContext(StoreContext);

    let { userId } = useParams();
    let usrId = (userId == null) ? currentUserId : userId;
    let user = users.find(usr => usr.id === usrId);

    function renderTags() {
        return (
            <ul>
                {user.tags.map(tag => <li><Link to={"/explore/" + tag}>{tag}</Link></li>)}
            </ul>
        );
    }

    function renderQuestions() {
        return (
            <ul>
                {posts.filter(post => post.userId === user.id).map(post =>
                    <li>
                        <Link>
                            {post.text} {post.topic}
                        </Link>
                    </li>
                )}
            </ul>
        )
    }

    return (
        <div className={css.container}>
            <Header title="Profile" />
            <div className={css.head}>
                <img src={publicUrl(user.photo)} alt="bigFace" />
                <div>
                    <h2>{user.id}</h2>
                    <p>{user.name}</p>
                    <p>{user.bio}</p>
                </div>
            </div>
            <div className={css.content}>
                <div className={css.topics}>
                    <p>Tags</p>
                    {renderTags()}
                </div>
                <div className={css.recent}>
                    <p>Recent questions</p>
                    {renderQuestions()}
                </div>
            </div>
        </div>
    )
}

export default Profile;