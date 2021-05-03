import React, { useContext } from 'react';
import Header from "./Header";
import Post from "./Post";
import { StoreContext } from "context/StoreContext.js";
import { Link, useParams } from "react-router-dom";
import publicUrl from 'utils/publicUrl.js';

import css from './Explore.module.css';

function Explore() {
    let {
        currentUserId, posts, users
    } = useContext(StoreContext);

    let { topic } = useParams();
    console.log(topic);

    function getPosts() {
        if (typeof topic == 'undefined') {
            return posts;
        }
        return posts.filter(post => post.topic === topic);
    }

    function getUsersT() {
        let list = users.filter(usr => usr.id !== currentUserId);
        let uList = (typeof topic === "undefined") ? list : list.filter(usr => usr.tags.includes(topic));
        console.log(uList);

        return (
            <div>
                <h4>{(typeof topic === "undefined") ? "Other users:" : "Other users related to this topic:"}</h4>
                <div className={css.usersBox}>
                    {uList.map(usr =>
                    <Link to={"/profile/" + usr.id}>
                        <div className={css.user}>
                            <img src={publicUrl(usr.photo)} />
                            <p>{usr.name}</p>
                        </div>
                        </Link>)}
                </div>
            </div>
        );
    }

    function renderPosts() {
        return getPosts().map(post =>
            <div className={css.post}>
                <Post userId={post.userId} text={post.text} replies={post.replies} />
            </div>
        );
    }

    return (
        <div className={css.whole}>
            <Header title={(typeof topic === "undefined") ? "Explore" : "Explore: " + topic} />
            {getUsersT()}
            {renderPosts()}
        </div>
    );
}

export default Explore;