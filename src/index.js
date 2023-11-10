// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js';
import Timer from './Timer';
import UseEffects from "./UseEffects";




function MyApp() {
 // const imag = "../public/logo192.png";
  const user = {
  name: "Nidhi",
  age: 20
}
  return <>
    <h1>Hello  my name is : {user.name} and age is :{user.age} </h1>
    <img src="../public/logo192.png"/>
    <a href= "https://www.amazon.in/ref=nav_logo">Click Here </a>
    
  </>

    
}



// function Hooks() {
// const [count, setCount] = useState(0);

//     return (
//       <>
        
//           <button onClick={() => {
//           console.log(count);   
         
 
//           setCount(count + 1);
//         }}>Increment</button>
//         <h1>{count} is { count%2==0?"Even": "Odd"}</h1>
        
       
            
//         </>
//     )
// }

// function Myhook() {
//  const  [count,setCount] = useState(0);
  
//   return (
//     <>
//       <h1>Hello { count}</h1>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
//root.render(<Timer/>);