import { Switch, Route } from 'react-router';

import './App.css';

import firebase from "./firebase";

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/sign-up/SignUp';
import Main from './components/main/Main';
import AddTask from './components/add-task/AddTask';

import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import {doc, setDoc, getFirestore} from "firebase/firestore";
import { useEffect } from 'react';
function App() {
  // useEffect(() => {
  //   signInWithPopup(getAuth(), new GoogleAuthProvider()).then((user) => {
  //     console.log(user.user.uid);
  //     setDoc(doc(doc(getFirestore(), "users/" + user.user.uid), "private/flags"), {
  //       flagOne: true,
  //       flagTwo: true,
  //       flagThree:true
  //     })
  //   })
  // }, [])
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
        <Route path = "/add-task">
          <AddTask />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
