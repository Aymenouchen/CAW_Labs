import React, { useState } from 'react';

const DynamicDivs = () => {
  const [divs, setDivs] = useState([]);
  const [divStyle, setDivStyle] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDivStyle((prevStyle) => ({ ...prevStyle, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!divStyle.width || !divStyle.height) {
      alert('Please provide both width and height.');
      return;
    }

    const newDiv = { ...divStyle };
    setDivs((prevDivs) => [...prevDivs, newDiv]);
    setDivStyle({ width: '', height: '', backgroundColor: '' });
    console.log(divStyle.width)
  };

  return (
    <div>
      <h1>Dynamic Divs</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={divStyle.width}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={divStyle.height}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={divStyle.backgroundColor}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Div</button>
      </form>

      <div>
        {divs.map((divStyle, index) => (
          <div
            key={index}
            style={{
              width: divStyle.width+'px',
              height: divStyle.height+'px',
              backgroundColor: divStyle.backgroundColor,
              margin: '10px',
              border: '1px solid black',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DynamicDivs;
