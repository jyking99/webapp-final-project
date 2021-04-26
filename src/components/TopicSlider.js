import React from 'react';
import css from './TopicSlider.module.css';

function TopicSlider(props) {
    function renderTopics() {
        return (
            props.topics.map(topic =>
                <li>
                    <button onClick={e => { props.changeSliderState(); props.setTopic(topic) }}>
                        {topic}
                    </button>
                </li>
            )
        );
    }

    return (
        <div className={css.slider}>
            <p><strong>Topics</strong></p>
            <ul>
                <li>
                    <button onClick={e => { props.changeSliderState(); props.setTopic("All") }}>
                        All
                    </button>
                </li>
                {renderTopics()}
            </ul>
        </div>
    );
}

export default TopicSlider;