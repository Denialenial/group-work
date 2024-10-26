import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:27017/items')
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
