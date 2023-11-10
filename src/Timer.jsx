import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css" 
function Timer() {
    
    const [timer, setTimer] = useState(0);
    useEffect(() => {
     const time=   setInterval(() => { setTimer(timer + 1) }, 1000);
        return function () {
            clearInterval(time);
        }
    },[timer])
    return (
        <>
            <h6>StopWatch</h6>

            <p>Current Time is :{timer}</p>

        </>
    )
}
export {Timer} ;