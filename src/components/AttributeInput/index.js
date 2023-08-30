import React from 'react';

export default function AttributeInput({ attribute, value, onIncrease, onDecrease }) {
  return (
    <div className="attribute-input">
      <h3>{attribute}</h3>
      <button onClick={onDecrease}>-</button>
      <span>{value}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}