import React, { useState } from 'react';

const Button = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
      setClickCount(clickCount + 1);
    };
  
    return (
      <div>
        <button onClick={handleClick}>ClickMe</button>
        <p>{clickCount % 2 === 0 ? 'Not Clicked' : 'Clicked'}</p>
      </div>
    );
  };
export default Button;