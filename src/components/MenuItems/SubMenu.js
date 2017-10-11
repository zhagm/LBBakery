import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { subMenu, title } from './styles.css';
import { MenuRows } from 'components';

export default class SubMenu extends Component {
  render () {
    return (
      <div className={subMenu}>
        <h2 className={title}>{this.props.category}</h2>
        <MenuRows items={this.props.items}/>
      </div>
    );
  }
}

SubMenu.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

SubMenu.defaultProps = {
  category: 'Item',
  items: [
    { item: 'croissant', price: '2.00' },
    { item: 'croissant', price: '2.00' },
    { item: 'croissant', price: '2.00' }
  ]
}
