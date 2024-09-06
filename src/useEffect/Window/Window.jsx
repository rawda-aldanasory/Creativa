import React, { useState, useEffect } from 'react';

const WindowDisplay = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="window-width-display">
      <h2>Window Width</h2>
      <p>Current width: {windowWidth}px</p>
    </div>
  );
};

export default WindowDisplay;