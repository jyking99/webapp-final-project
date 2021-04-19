import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { StoreContext } from "context/StoreContext.js";

import css from './Chat.module.css';

function Chat() {
    const [message, setMessage] = useState('');

    let { userId } = useParams();
    console.log(userId);

    let {
        chats, addChat
    } = useContext(StoreContext);

    function handleSubmitComment(event) {
        addChat(userId, message);
        setMessage(''); //reset
        event.preventDefault(); // prevent page refresh
    }

    function getHistory() {
        return (
            <ul>
                {
                    chats.filter(msg => msg.from === userId || msg.to === userId)
                        .map(msg =>
                            <li>
                                <p>{msg.from}: {msg.text}</p>
                            </li>
                        )
                }
            </ul>
        );
    }

    return (
        <div className={css.container}>
            <p className={css.text}>{userId}</p>
            <div>
                {getHistory()}
            </div>
            <div className={css.inputArea}>
                <form className={css.addComment} onSubmit={handleSubmitComment}>
                    <input type="text" placeholder="Add a comment…" value={message} onChange={e => setMessage(e.target.value)} />
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;