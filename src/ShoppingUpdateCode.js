import React, { useState, useEffect } from 'react';

const ShoppingUpdateCode = () => {
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');
  const [prize, setPrize] = useState(0);
  const [allData, setAllData] = useState([]);

  // Update the count whenever 'allData' changes
  useEffect(() => {
    setCount(allData.length);
  }, [allData]);

  // Handle changes in the product name input
  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  // Handle changes in the product prize input
  const handlePrizeChange = (e) => {
    setPrize(Number(e.target.value));
  };

  // Add an item to the list and update total price
  const handleAddItem = () => {
    if (data && prize > 0) {
      // Add the new item to 'allData' array
      setAllData([...allData, { name: data, value: prize }]);

      // Update the total price by adding the new item's prize
      setTotal((prevTotal) => prevTotal + prize);

      // Reset input values
      setData('');
      setPrize(0);
    }
  };

  return (
    <div>
      <div>
        Enter Product Name:
        <input type="text" value={data} onChange={handleDataChange} />
      </div>

      <div>
        Enter Product Prize:
        <input type="text" value={prize} onChange={handlePrizeChange} />
      </div>

      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {/* Display the list of added items */}
        {allData.map((item, index) => (
          <li key={index}>
            {item.name} {item.value}
          </li>
        ))}
      </ul>

      <h6>
        {/* Display the count and total price */}
        Count of Product is {count} and total is {total}
      </h6>
    </div>
  );
};

export default ShoppingUpdateCode;
