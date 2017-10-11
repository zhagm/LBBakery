import React from 'react';
import { Home } from 'components';
import { homePage, overlay, wrap } from './styles.css';

export default function HomeContainer () {
  return (
    <span className={wrap}>
      <div className={homePage}>
        <div className={overlay}>
          <Home />
        </div>
      </div></span>
  );
}
