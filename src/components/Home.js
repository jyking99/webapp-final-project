import React from 'react';

import FriendsList from './FriendsList';
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header title="StudyPal" />
      <FriendsList />
    </div>
  );
}

export default Home;