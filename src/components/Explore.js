import React, { useContext } from 'react';
import Header from "./Header";
import Post from "./Post";
import { StoreContext } from "context/StoreContext.js";
import { Link, useParams } from "react-router-dom";

import css from './Explore.module.css';

function Explore() {
    let {
        posts
    } = useContext(StoreContext);

    let { topic } = useParams();
    console.log(topic);

    function getPosts() {
        if (typeof topic == 'undefined') {
            return posts;
        }
        return posts.filter(post => post.topic === topic);
    }

    function renderPosts() {
        return getPosts().map(post =>
            <div className={css.post}>
                <Post userId={post.userId} text={post.text} replies={post.replies}/>
            </div>
        );
    }

    return (
        <div>
            <Header title={"Explore" + ((typeof topic !== 'undefined') ? ": " + topic : "")} />
            {renderPosts()}
        </div>
    );
}

export default Explore;