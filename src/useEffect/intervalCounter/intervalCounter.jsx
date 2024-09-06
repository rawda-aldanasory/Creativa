import React, { useState, useEffect } from "react";
import './intervalCounter.css'

const IntervalCounter = () => {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="counter">
      <p>Counter {counter}</p>
    </div>
  );
};

export default IntervalCounter;