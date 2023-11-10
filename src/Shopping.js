import React, { useState } from 'react'

const Shopping = () => {
  const [data, setData] = useState("");
  const [arr, setArr] = useState([]);
  
  return (
      <div>
          <h1>Shopping App</h1>
          type item name:
          <input type='text' onChange={(e) => {
              setData(e.target.value);
      }} />
      <button onClick={() => {
        setArr([...arr, data]);
      }}>Add</button>

      
    
          
          
          <ul>
              
              {
                //   arr.map((ele, index) => {
                //      return  <li key={index}>{ ele}</li>
                //   })

                  
             arr.map((ele, index) => (
                <li key={index}>{ele}</li>
  ))
}
              
         </ul>
      
    </div>
  )
}

export { Shopping };
