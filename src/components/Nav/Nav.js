import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { container, navContainer, link, active } from './styles.css';

export default function Nav (props) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <ul>
          <li><NavLink activeClassName={active} exact to='/' className={link}>{'WELCOME'}</NavLink></li>
          <li><NavLink activeClassName={active} to='/menu' className={link}>{'MENU'}</NavLink></li>
          <li><NavLink activeClassName={active} to='/locations' className={link}>{'LOCATIONS'}</NavLink></li>
          <li><NavLink activeClassName={active} to='/order' className={link}>{'ORDER'}</NavLink></li>
          <li><NavLink activeClassName={active} to='/contact' className={link}>{'CONTACT US'}</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

Nav.propTypes = {};
