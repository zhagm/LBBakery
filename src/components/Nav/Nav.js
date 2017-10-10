import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { container, navContainer, link } from './styles.css';

export default function Nav (props) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <ul>
          <li><NavLink activeClassName='active' to='/template' className={link}>{'WELCOME'}</NavLink></li>
          <li><NavLink activeClassName='active' to='/template' className={link}>{'MENU'}</NavLink></li>
          <li><NavLink activeClassName='active' to='/template' className={link}>{'LOCATIONS'}</NavLink></li>
          <li><NavLink activeClassName='active' to='/template' className={link}>{'ORDER'}</NavLink></li>
          <li><NavLink activeClassName='active' to='/template' className={link}>{'CONTACT US'}</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

Nav.propTypes = {};
