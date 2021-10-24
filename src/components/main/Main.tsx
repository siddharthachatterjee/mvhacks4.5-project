import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/AuthContext";

import {child, ref, getDatabase, get, set} from "firebase/database";
import "./Main.css";

export default function Main() {
    const history = useHistory();

    const auth: any = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [estimations,setEstimations] = useState({});
    useEffect(() => {
        get(child(ref(getDatabase()), `tasks/${auth && auth.uid}`))
            .then(snapshot => {
                if (snapshot.exists()) {
                    setTasks(snapshot.val());
                    
                }
            })
    }, [auth.uid]);

    useEffect(() => {
        if (tasks && tasks.length) {
            let arr = tasks;
            arr.forEach((task, i) => {
                    get(child(ref(getDatabase()), `times/${task.subject}+${task.difficulty}`))
                        .then(snapshot => {
                            if (snapshot.exists()) {
                                arr[i].estimation = (+arr[i].estimation + +snapshot.val().time) / 2;
                                setEstimations(prev => ({
                                    ...prev,
                                    i: arr[i].estimation
                                }))
                            }
                        })
                });
        }
    }, [tasks])

    function markAsCompleted(i) {
        let time = prompt("how long did it take you to complete?") || 30;
        set(ref(getDatabase(), `times/${tasks[i].subject}+${tasks[i].difficulty}`), {
            time
        })
        set(ref(getDatabase(), `tasks/${auth?.user.uid! || "anonymous"}/${i}`), {
            ...tasks[i],
            completed: true
        });
    }

    
    // function addTask() {

    // }
    return auth && (
        <div id = "main">
            <div id = "welcome">
                <h1>Welcome, {auth.user && auth.user.displayName} </h1>
            </div>
            <div id = "tasks">
                <h2> Your Tasks </h2>
                <hr />
                {/* {JSON.stringify(tasks)} */}
                {tasks && tasks.length && tasks.map((task: any, i) => !task.completed && (
                    <div key = {i}>
                        {task.name} ~{estimations[i] || task.estimation}mins
                        <button onClick = {() => markAsCompleted(i)}> Mark As Completed </button>
                    </div>
                ))}
                <button className = "call-to-action" onClick = {() => history.push("/add-task")}>
                    Add Task
                </button>
            </div>
        </div>
    );
}