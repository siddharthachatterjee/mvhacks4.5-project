import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import "./Main.css";

export default function Main() {
    const auth: any = useContext(AuthContext);
    return auth && (
        <div id = "main">
            <div id = "welcome">
                <h1>Welcome, {auth.user && auth.user.displayName} </h1>
            </div>
            <div id = "tasks">
                <h2> Your Tasks </h2>
                <hr />
            </div>
        </div>
    );
}