import React from 'react';
import styles from './Reader.module.css';

const Publication = ({ items, currentItem }) => (
  <article className={styles.publication}>
    <h2 className={styles.publicationTitle}>{items[currentItem].title}</h2>
    <p className={styles.publicationP}>{items[currentItem].text}</p>
  </article>
);

export default Publication;
