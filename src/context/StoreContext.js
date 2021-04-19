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

  function addChat(userId, text) {
    const message = {
      from: store.currentUserId,
      to: userId,
      text,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
      chats: store.chats.concat(message)
    });
  }

  return (
    <StoreContext.Provider value={{ ...store, addChat }}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider; // export this component as default



