import React from 'react';
import styles from './Reader.module.css';

const Counter = ({ currentItem, items }) => (
  <p className={styles.counter}>{`${currentItem + 1}/${items.length}`}</p>
);

export default Counter;
