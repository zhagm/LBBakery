import React from 'react';
import { footer } from 'sharedStyles/styles.css';

export default function Footer () {
  return (
    <div className={footer}>
      <a href="https://www.yelp.com/biz/la-bohemia-bakery-rockville" target='_tab'>Yelp</a>
      <a href="https://www.instagram.com/labohemiabakery/" target='_tab'>Instagram</a>
      <a href="https://twitter.com/labohemiabakery" target='_tab'>Twitter</a>
    </div>
  );
}
