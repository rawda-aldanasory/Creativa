import React, { useState, useEffect } from 'react';

const MousePositionAndClicks = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container" onClick={handleClick} style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Mouse Position</h2>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
      <h2>Button Clicks</h2>
      <p>Click Count: {clickCount}</p>
      <button className='btn' style={{ padding: '5px 10px', fontSize: '16px' }}>Click Me!</button>
    </div>
  );
};

export default MousePositionAndClicks;