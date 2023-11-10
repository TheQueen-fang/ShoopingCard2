import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function UseEffects(){
    useEffect(() => {
        console.log("Mounting");
        return function () {
            console.log("unmounting");
        }
    }, []);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(20);
    const [isVisible, setVisible] = useState(true);
   
    useEffect(() => {
        console.log("Updating.....");
        return function(){
            console.log(count + "umnounting ");
        }
    },[count]);


    return (

        <>
            <h6>Count is {count}</h6>
             <h6>Count2 is { count2}</h6>
            <button onClick={() => {
                setCount(count+1)
            }}>Click Me</button>

            <button onClick={() => {
                setCount2(count2+1)
            }}>Click Me2</button>

            <button onClick={() => {
                setVisible()
            }}>Toggle</button>
        </>
)
}

export default UseEffects;