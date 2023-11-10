import React from 'react';
import { useState, useEffect } from 'react';
const ShoppingApp2 = () => {
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(-1);
  const [data, setData] = useState('');
  const [prize, setPrize] = useState(0);
  const [allData, setAllData] = useState([]);
  function handleCount() {
    setCount(count + 1);
  }
  useEffect(() => {
    handleCount();
  }, [allData]);
  return (
    <div>
      Enter Product Name:
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      Enter Product Prize :
      <input
        type="text"
        onChange={(e) => {
          // mistake 1st=>never use UseState on onchange funtion
          setPrize(e.target.value);
          // mistake 2nd => this bad code understand the concept of use this =>setTotal((prevTotal) => prevTotal + prize);
          setTotal(total + Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setAllData([...allData, { name: data, value: prize }]);
        }}
      >
        Add Item
      </button>
      <ul>
        {allData.map((ele, index) =>
          allData.length > 0 ? (
            <li key={index}>
              {console.log(ele)}
              {ele.name} {ele.value}
            </li>
          ) : (
            ''
          )
        )}
      </ul>
      <h6>
        Count of Product is {allData.length} and total is {total}
      </h6>
    </div>
  );
};

export default ShoppingApp2;
