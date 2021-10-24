import React, {useContext, useState} from "react";

import {set, ref, getDatabase,get, child} from "firebase/database";

import "./AddTask.css";
import InputBox from "../input-box/InputBox";
import { AuthContext } from "../../context/AuthContext";
import { User } from "@firebase/auth";
import { useHistory } from "react-router";


export default function AddTask() {
    const auth: {user: User, uid: string} | null = useContext(AuthContext);
    const [name, setName] =useState("");
    const [estimation, setEstimation] = useState('30');
    const [subject, setSubject] = useState("math");
    const [difficulty, setDifficulty] = useState("regular");
    const history = useHistory();
    function add() {
        get(child(ref(getDatabase()), `tasks/${auth && auth.uid}`))
            .then(snapshot => {
                let length = 0;
                if (snapshot.exists()) {
                    length = snapshot.val().length;
                }
                set(ref(getDatabase(), `tasks/${auth?.user.uid! || "anonymous"}/${length}`), {
                    name,
                    estimation,
                    subject,
                    difficulty
                })
                .then(() =>{
                    history.push("/main");
                })
            })
        
    }
    return (
        <div id = "add-task-container">
            <div id = "add-task">
                <h1> Add Task </h1>
                Task Name:
                <InputBox val = {name} setVal = {setName} />
                <br />
                <br />
                Subject:
                <select className = "input-box" value = {subject} onChange = {e => setSubject(e.target.value)}>
                    <option value = "math"> Math </option>
                    <option value = "english"> English </option>
                    <option value = "history"> History </option>
                    <option value = "biology"> Biology </option>
                    <option value = "chemisty"> Chemistry </option>
                    <option value = "physics"> Physics </option>
                    <option value = "computer science"> Computer Science </option>
                    <option value = "elective"> Elective </option>
                </select>
                <br/>
                <br />
                Course Difficulty:
                <select className  = "input-box" value = {difficulty} onChange = {e => setDifficulty(e.target.value)}>
                    <option value = "regular"> Regular </option>
                    <option value = "honors"> Honors </option>
                    <option value = "ap"> AP </option>
                </select>
                <br />
                <br />
                Your Estimation of Time
                <InputBox type = {"number"} val = {estimation} setVal = {setEstimation} />
                <br />
                <button onClick = {add} className = "call-to-action">
                    Add +
                </button>
                <button onClick = {() => history.push("/main")} className = "call-to-action" style = {{background:"gray"}}>
                    Cancel
                </button>
            </div>
        </div>
    );
}