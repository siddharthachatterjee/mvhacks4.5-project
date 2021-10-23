import React from "react";
import { useHistory } from "react-router";

import "./Home.css";

export default function Home() {
    const history = useHistory();
    return (
        <div id = "home">
            <div id = "landing">
                <div id = "image">
                    <img src = "/images/homework.jpeg" />
                </div>
                <main>
                    <h1> Your Guide to Homework  </h1>
                    <p>
                        With Homework Estimator, you can accurately estimate how important and how long each homework assignment will take based on an algorithm that factors in normal time for the subject, the type of homework, and user responses for how long homework took.
                    </p>
                    <button className = "call-to-action" onClick = {() => history.push("/sign-up")}>
                        Sign Up
                    </button>
                </main>
            </div>
        </div>
    );
}