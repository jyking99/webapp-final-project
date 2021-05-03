import React, { createContext, useState, useEffect } from 'react';

import initialStore from 'utils/initialStore';
import uniqueId from "utils/uniqueId";

// export the context so that other components can import
export const StoreContext = createContext();

function StoreContextProvider(props) {
  const [store, setStore] = useState(() => {
    return JSON.parse(window.localStorage.getItem('store')) || initialStore;
  });

  useEffect(() => {
    window.localStorage.setItem('store', JSON.stringify(store));
  }, [store]);

  function addChat(userId, text, topic) {
    const message = {
      id: uniqueId(),
      from: store.currentUserId,
      to: userId,
      text,
      topic: topic.toLowerCase(),
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
      chats: store.chats.concat(message)
    });
  }

  function getChat(chatId) {
    return store.chats.find(chat => chat.id == chatId);
  }

  function getUser(userId) {
    return store.users.find(user => user.id == userId);
  }

  function changeTag(chatId, tag) {
    let chat = getChat(chatId);
    chat["topic"] = tag.toLowerCase();
    setStore({
      ...store,
      chats: store.chats.filter(c => !(c.id == chatId)).concat(chat)
    })
  }

  // for sort()
  function compChats(chat1, chat2) {
    return chat1.datetime < chat2.datetime;
  }

  function publish(chat) {
    const post = {
      userId: chat.from,
      text: chat.text,
      datetime: chat.datetime,
      topic: chat.topic.toLowerCase(),
      replies: []
    }

    const newUser = getUser(chat.from);
    if (!newUser["tags"].includes(chat.topic)) {
      newUser["tags"].push(chat.topic);
      console.log(newUser["tags"]);
    }

    setStore({
      ...store,
      posts: store.posts.concat(post),
      users: store.users.filter(u => !(u.id == newUser.id)).concat(newUser)
    })
  }

  return (
    <StoreContext.Provider value={{ ...store, changeTag, getUser, addChat, getChat, compChats, publish }}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider; // export this component as default