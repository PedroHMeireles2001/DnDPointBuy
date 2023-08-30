// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import AttributeInput from './components/AttributeInput';

const initialAttributes = {
  Strength: 8,
  Dexterity: 8,
  Constitution: 8,
  Intelligence: 8,
  Wisdom: 8,
  Charisma: 8,
};

const maxAttributeValue = 15;
const minAttributeValue = 8;

const pointsCost = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9,
};

function calculateRemainingPoints(attributes) {
  let usedPoints = 0;
  for (const attribute in attributes) {
    usedPoints += pointsCost[attributes[attribute]];
  }
  return startingPoints - usedPoints;
}

const startingPoints = 27;

function App() {
  const [attributes, setAttributes] = useState(initialAttributes);
  const [remainingPoints, setRemainingPoints] = useState(startingPoints);

  useEffect(() => {
    setRemainingPoints(calculateRemainingPoints(attributes));
  }, [attributes]);

  const handleIncrease = (attribute) => {
    if (attributes[attribute] < maxAttributeValue && remainingPoints > 0 && remainingPoints >= pointsCost[attributes[attribute] + 1] - pointsCost[attributes[attribute]]) {
      setAttributes((prevAttributes) => ({
        ...prevAttributes,
        [attribute]: prevAttributes[attribute] + 1,
      }));
    }
  };

  const handleDecrease = (attribute) => {
    if (attributes[attribute] > minAttributeValue) {
      setAttributes((prevAttributes) => ({
        ...prevAttributes,
        [attribute]: prevAttributes[attribute] - 1,
      }));
    }
  };

  return (
    <div className="App">
      <h1>D&D Attribute Calculator</h1>
      <p>Remaining points: {remainingPoints}</p>
      {Object.keys(attributes).map((attribute) => (
        <AttributeInput
          key={attribute}
          attribute={attribute}
          value={attributes[attribute]}
          onIncrease={() => handleIncrease(attribute)}
          onDecrease={() => handleDecrease(attribute)}
        />
      ))}
    </div>
  );
}


export default App;
