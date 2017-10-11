import React, { Component } from 'react';
import { centerWrap } from 'sharedStyles/styles.css';
import { paragraph, lightHr } from './styles.css';

export default class Order extends Component {
  render () {
    return (
      <div className={centerWrap}>
        <h1>{'WE NOW ACCEPT ORDERS'}</h1>
        <div className={paragraph}>
          <p>We currently only take orders for sandwiches at our main location in Rockville. To order, please click here. </p>
          <p>For other, more specific orders please order by calling: (240)-360-3697.</p>
          <hr className={lightHr}/>
          <p>Some items are exclusive to orders and cannot be found on our regular menu. They can be found below. Order these through the phone number. The minimum order quantity is 10 pieces for any item under $5. </p>
        </div>
      </div>
    );
  }
}
