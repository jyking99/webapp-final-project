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
                {user.tags.map(tag => <li className={css.tags}><Link to={"/explore/" + tag}>{tag}</Link></li>)}
            </ul>
        );
    }

    function renderQuestions() {
        return (
            <ul>
                {posts.filter(post => post.userId === user.id).map(post =>
                    <li className={css.questions}>
                        <Link>
                            <div>
                                {post.text}
                                <div className={css.topic}>Topic: {post.topic}</div>
                            </div>
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
                    <b><p>{user.id}</p></b>
                    <p>{user.name}</p>
                    <p className={css.bio}>{user.bio}</p>
                </div>
            </div>
            <div className={css.content}>
                <div className={css.topics}>
                    <b><p>Tags</p></b>
                    {renderTags()}
                </div>
                <div className={css.recent}>
                    <b><p>Recent posts</p></b>
                    {renderQuestions()}
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default Profile;