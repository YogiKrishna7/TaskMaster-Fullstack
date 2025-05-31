import { use, useState } from "react";

const Content = () => {
  const [name, setName] = useState("Yogi");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Yogi", "Prasad", "Eswar"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    console.log("Clicked It");
  };

  const handleClick2 = (name) => {
    console.log(name + " Clicked It");
  };

  const handleClick3 = (e) => {
    console.log(e);
  };

  const increaseCount = () =>{
    setCount(count + 1);
  }
  const decreaseCount = () =>{
    setCount(count - 1);
  }

  return (
    <main>
      <p>{count}</p>
      <p onDoubleClick={handleClick}> Hello {name}!</p>
      <br />
      <button onClick={handleNameChange}>Change Name</button>
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <button onClick={() => handleClick2("Yogi")}>Click</button>
      <br />
      <button onClick={(e) => handleClick3(e)}>Click</button>
      <br />
      <button onClick={increaseCount}>Increase Count</button>
      <br />
      <button onClick={decreaseCount}>Decrease Count</button>
    </main>
  );
};

// export default Content;