import React from "react";

interface InputBoxProps {
    val: string | number;
    type?: string;
    setVal: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputBox(props: InputBoxProps) {
    return (
        <input type = {props.type || "text"} className = "input-box" value = {props.val} onChange = {e => props.setVal(e.target.value)} />
     );
}