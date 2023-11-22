import React, { useState } from "react";

const DisplayTab = ({ table, onRemove }) => {
  return (
    <div>
      <h2>Table Display</h2>
      <ul>
        {table.map((item, index) => (
          <li key={index} onClick={() => onRemove(index)}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DisplayTab;