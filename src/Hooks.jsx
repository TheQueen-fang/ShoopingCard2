import React from "react";
import ReactDOM from "react-dom/client";

import { useState } from "react";

Hooks = () => {
    [count, setCount] = useState(0);
    [value, setValue] = useState("");
    return (
        <>
            <button onClick={() => {
                setCount(count + 1);
            setValue(count%2==0?"Even": Odd)
            }}>Increment</button>
            <p>{ count } is {value} </p>
        </>
    )
}