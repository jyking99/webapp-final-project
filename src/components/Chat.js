import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import publicUrl from 'utils/publicUrl.js';
import { StoreContext } from "context/StoreContext.js";
import ChatHeader from "./ChatHeader";
import TopicSlider from "./TopicSlider";

import css from './Chat.module.css';
import { CssBaseline } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Chat() {
    const [message, setMessage] = useState('');
    const [sliderState, setSliderState] = useState(false); // hidden initially
    const [topic, setTopic] = useState("All");

    let { userId } = useParams();

    let {
        chats, addChat, getUser, compChats
    } = useContext(StoreContext);

    function handleSubmitComment(event) {
        if (message !== '') {
            addChat(userId, message, (topic === "All") ? "null" : topic);
            setMessage(''); //reset
        }
        event.preventDefault(); // prevent page refresh
    }

    function styleMessage(msg) {
        return <li className={css.bubble}>
            <div className={css.outer}>
                <Link to={"/profile/" + getUser(msg.from).id}>
                    <img src={publicUrl(getUser(msg.from).photo)} alt='icon' />
                </Link>
                <Link to={"/newpost/" + msg.id}>
                    <div>
                        <p><strong>{msg.from}</strong></p>
                        <p>{msg.text}</p>
                    </div>
                </Link>
            </div>
        </li>;
    }

    function getChats() {
        return chats.filter(msg => msg.from === userId || msg.to === userId).sort(compChats);
    }

    function getHistory() {
        return (
            <div>
                <ul className={css.history}>
                    {
                        (topic == "All") ?
                            getChats().map(msg => styleMessage(msg)) :
                            getChats().filter(msg => msg.topic == topic).map(msg => styleMessage(msg))
                    }
                </ul>
            </div>
        );
    }

    function toggleSliderState() {
        setSliderState(!sliderState);
    }

    function getTopics() {
        let topics = [];
        getChats().forEach(chat => topics.push(chat.topic));
        return [...new Set(topics)];
    }

    return (
        <div className={css.container}>
            <ChatHeader title={"Chat with " + userId} changeSliderState={toggleSliderState} className={css.header}/>
            {
                sliderState && <TopicSlider setTopic={setTopic} topics={getTopics()} changeSliderState={toggleSliderState} />
            }
            <div>
                {getHistory()}
            </div>
            <div className={css.inputArea}>
                <form className={css.addComment} onSubmit={handleSubmitComment}>
                    <input className={css.chatInput} type="text" placeholder="Type a respond..." value={message} onChange={e => setMessage(e.target.value)} />
                    <button className={css.send} type="Send">send</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;