import React from "react";
import { useState } from "react";

const Content2 = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "item 1",
    },
    {
      id: 2,
      checked: false,
      item: "item 2",
    },
    {
      id: 3,
      checked: false,
      item: "item 3",
    },
  ]);

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  return (
    <main>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label>{item.item}</label>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content2;
