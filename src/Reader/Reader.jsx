import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Reader.module.css';
import items from './publications.json';
import Publication from './Publication';
import Counter from './Counter';

const cx = classNames.bind(styles);

export default class Reader extends Component {
  constructor(items) {
    super();
    this.state = {
      publicationItem: 0,
      prevBtnDisabled: false,
      nextBtnDisabled: false,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => {
      const nextBtnDisabled = prevState.publicationItem === 10;

      let prevBtnDisabled = 0;
      if (this.prevBtnDisabled && prevState.publicationItem === 1) {
        prevBtnDisabled = false;
      }
      return {
        publicationItem: prevState.publicationItem + 1,
        prevBtnDisabled,
        nextBtnDisabled,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      const prevBtnDisabled = prevState.publicationItem === 1;
      let nextBtnDisabled = 0;
      if (this.nextBtnDisabled && prevState.publicationItem === 10) {
        nextBtnDisabled = false;
      }
      return {
        publicationItem: prevState.publicationItem - 1,
        prevBtnDisabled,
        nextBtnDisabled,
      };
    });
  };

  render() {
    const currentItem = this.state.publicationItem;
    const { prevBtnDisabled } = this.state;
    const { nextBtnDisabled } = this.state;
    return (
      <div className={styles.reader}>
        <Publication currentItem={currentItem} items={items} />
        <Counter currentItem={currentItem} items={items} />

        <section className={styles.controls}>
          <button
            type="button"
            onClick={this.handleDecrement}
            className={cx({
              button: true,
              buttonDisabled: prevBtnDisabled === true,
            })}
          >
            Назад
          </button>
          <button
            type="button"
            className={cx({
              button: true,
              buttonDisabled: nextBtnDisabled === true,
            })}
            onClick={this.handleIncrement}
          >
            Вперед
          </button>
        </section>
      </div>
    );
  }
}
