import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigation, active } from './styles.css';

export default class MenuNav extends Component {
  render () {
    console.log(active);
    return (
      <div className={navigation}>
        <ul>
          {this.props.sections.map((c, i, a) => (
            <li
              key={i}
              className={this.props.active === c ? active : ''}
              onClick={this.props.handleClick.bind(null, c)}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

MenuNav.propTypes = {
  sections: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};
