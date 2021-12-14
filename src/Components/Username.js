import React, { useRef } from 'react'

export default function Username(props) {

    const inputRef = useRef("");

    function handleSubmit(e) {
        e.preventDefault();
        const newName = inputRef.current.value;
        props.setUsername(newName);
        inputRef.current.value = "";
    }
    

    return (
        <div className="change-username">
            <p>Your Name: {props.username}</p>
            <form>
                <input ref={inputRef} type="text" placeholder="your name"></input>
                <button onClick={handleSubmit}>change</button>
            </form>
        </div>
    )
}
