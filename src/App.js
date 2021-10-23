import { Switch, Route } from 'react-router';

import './App.css';

import firebase from "./firebase";

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
