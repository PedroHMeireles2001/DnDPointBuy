import React from 'react';
import styles from './AttributeInput.module.css'

export default function AttributeInput({ attribute, value, onIncrease, onDecrease }) {
  return (
    <div className={styles.attributeinput}>
      <h3 className={styles.title}>{attribute}</h3>
      <button onClick={onDecrease} className={styles.attbutton}>-</button>
      <span className={styles.value}>{value}</span>
      <button onClick={onIncrease} className={styles.attbutton}>+</button>
    </div>
  );
}