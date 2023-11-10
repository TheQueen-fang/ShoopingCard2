import React from 'react'
import { useState } from 'react';
const Name = () => {
 const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
    return (
        <div className="App">
            FirstName:
            <input type='text' onChange={(e) => {
                setFirstName(e.target.value);
            }} />
            <br />
            LastName:
            <input type='text' onChange={(e) => {
                setLastName(e.target.value);
            }} />
            <span>
                {firstName !== "" || lastName !== "" ? `Hello ${firstName} ${lastName}` : ""}
            </span>

      
        </div>
    );
}

export {Name};
