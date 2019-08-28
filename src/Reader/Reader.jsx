import React, { Component } from 'react';
import styles from './Reader.module.css';
import publications from './publications.json';

export default class Reader extends Component {
  constructor(publications) {
    super();
    this.state = {
      publicationItem: 0,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      publicationItem: prevState.publicationItem + 1,
    }));
  };

  render() {
    const currentItem = this.state.publicationItem;
    return (
      <div className={styles.reader}>
        <article className={styles.publication}>
          <h2 className={styles.publicationH2}>
            {publications[currentItem].title}
          </h2>
          <p className={styles.publicationP}>
            {publications[currentItem].text}
          </p>
        </article>

        <p className={styles.counter}>3/10</p>

        <section className={styles.controls}>
          <button type="button" className={styles.button}>
            Назад
          </button>
          <button type="button" className={styles.button}>
            Вперед
          </button>
        </section>
      </div>
    );
  }
}
