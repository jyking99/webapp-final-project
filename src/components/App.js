import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header';
import Navbar from './Navbar';

import Home from './Home';
import Explore from './Explore';
import Profile from './Profile';
import Chat from './Chat';

import StoreContextProvider from "context/StoreContext.js";

import css from './App.module.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <StoreContextProvider>
        <div className={css.container}>
          <main className={css.content}>
            <Switch>
              <Route path="/explore">
                <Explore />
              </Route>
              <Route path="/chat/:userId">
                <Chat />
              </Route>
              <Route path="/profile/:userId?">
                <Profile />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
          <Navbar />
        </div>
      </StoreContextProvider>
    </Router>
  );
}

export default App;
