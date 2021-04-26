import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "./Header";
import { StoreContext } from "context/StoreContext.js";
import publicUrl from "utils/publicUrl.js";

import css from './NewPost.module.css';

function NewPost(props) {
    let { chatId } = useParams();
    let { changeTag, currentUserId, getChat, getUser, publish } = useContext(StoreContext);

    let chat = getChat(chatId);

    const [tag, setTag] = useState(chat.topic);

    function handleTagChange(event) {
        console.log(tag);
        changeTag(chatId, tag);
        event.preventDefault(); // prevent page refresh
    }

    function handlePublish() {
        publish(chat);
    }

    return (
        <div>
            <Header title="Post this paragraph" />
            <div className={css.msg}>
                <img src={publicUrl(getUser(chat.from).photo)} alt='icon' />
                <div>
                    <p><strong>{chat.from}</strong></p>
                    <p>{chat.text}</p>
                </div>
            </div><br/>
            <div className={css.tagArea}>
                <p>Current Topic: {chat.topic}</p>
                <form onSubmit={handleTagChange} className={css.addComment}>
                    <input type="text" placeholder="Type here to change the tag"  onChange={e => setTag(e.target.value)}></input>
                    <button type="submit">OK</button>
                </form>
            </div>
            <div className={css.actions}>
                <button><Link to={"/chat/" + ((chat.from == currentUserId) ? chat.to : chat.from)}>Cancel</Link></button>
                <button>Save</button>
                <button onClick={handlePublish}>Publish</button>
            </div>
        </div>
    )
}

export default NewPost;