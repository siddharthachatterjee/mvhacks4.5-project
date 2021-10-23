import { Switch, Route } from 'react-router';

import './App.css';

import firebase from "./firebase";

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/sign-up/SignUp';
import Main from './components/main/Main';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/sign-up">
          <SignUp />
        </Route>
        <Route path = "/main">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
