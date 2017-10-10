import React from 'react';
import { Home } from 'components';
import { homePage, overlay } from './styles.css';

export default function HomeContainer () {
  return (
    <div className={homePage}>
      <div className={overlay}>
        <Home />
      </div>
    </div>
  );
}
