import React, { Component } from 'react';
import styles from './Reader.module.css';
import items from './publications.json';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class Reader extends Component {
  constructor(items) {
    super(items);
    this.state = {
      publicationItem: 0,
      prevBtnDisabled: true,
      nextBtnDisabled: false,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => {
      const nextBtnDisabled = prevState.publicationItem === 10;

      let prevBtnDisabled = false;
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

      let nextBtnDisabled = false;
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
    const { prevBtnDisabled, nextBtnDisabled } = this.state;
    return (
      <div className={styles.reader}>
        <Publication currentItem={currentItem} items={items} />
        <Counter currentItem={currentItem} items={items} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
        />
      </div>
    );
  }
}
