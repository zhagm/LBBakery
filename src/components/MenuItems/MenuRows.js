import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { row, item, price } from './styles.css';

export default class MenuRows extends Component {
  render () {
    return (
      <div>
        {this.props.items.map((c, i, a) => (
          <div key={i} className={row}>
            <span className={item}>{c.item}</span>
            <span className={price}>${c.price}</span>
          </div>
        ))}
      </div>
    );
  }
}

MenuRows.propTypes = {
  items: PropTypes.array.isRequired
};
