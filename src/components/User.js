import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h4>Count: {count}</h4>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment count
      </button>
      <h4>Name: {name}</h4>
      <h4>Location: Kottarakkara</h4>
      <h4>Contact: +919567024555</h4>
    </div>
  );
};

export default User;
