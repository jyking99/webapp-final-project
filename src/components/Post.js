import React, { useContext, useState } from 'react';
import publicUrl from 'utils/publicUrl.js';
import { StoreContext } from "context/StoreContext.js";

import css from './Post.module.css';

function Post(props) {
    // const [comment, setComment] = useState('');
    // const [toggleComment, setToggleComment] = useState(false); // hidden initially

    let {
        getUser
    } = useContext(StoreContext);

    function renderComments() {
        return (
            props.replies.map(re =>
                <li><strong>{re.from}:</strong> {re.text}</li>
            )
        );
    }

    return (
        <div className={css.whole}>
            <div className={css.post}>
                <img src={publicUrl(getUser(props.userId).photo)} alt='icon' />
                <div>
                    <p><strong>{props.userId}</strong></p>
                    <p>{props.text}</p>
                </div>
            </div>
            <ul className={css.comments}>
                {renderComments()}
            </ul>
        </div>
    );
}

export default Post;