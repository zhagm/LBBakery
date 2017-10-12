import React, { Component } from 'react';
import { centerWrap } from 'sharedStyles/styles.css';
import { paragraph, lightHr, infoLink } from './styles.css';
import { SubMenu, MenuNav } from 'components';

export default class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Sweet'
    }
    this.changeActive = this.changeActive.bind(this)
  }
  changeActive (active) {
    this.setState({ active });
  }
  render () {
    return (
      <div className={centerWrap}>
        <h1>{'WE NOW ACCEPT ORDERS'}</h1>
        <div className={paragraph}>
          <p>We currently only take orders for sandwiches at our main location in Rockville. To order, please click here. </p>
          <br/>
          <p>For other, more specific orders please order by calling: <b><a className={infoLink} href="tel:+1-240-360-3697">(240)-360-3697</a></b>.</p>
          <hr className={lightHr}/>
          <p>Some items are exclusive to orders and cannot be found on our regular menu.
            They can be found below. Order these through the phone number. </p>
          <p><b>The minimum order quantity is 10 pieces for any item under $5.</b></p>
        </div>
        <MenuNav sections={navArray} handleClick={this.changeActive} active={this.state.active}/>
        { menu[this.state.active].map((sub, i, a) => (
          <SubMenu key={i} category={sub.category} items={sub.items} />
        ))}
      </div>
    );
  }
}

let navArray = [ 'Sweet', 'Savory' ];
let menu =
{
  'Sweet': [
    {
      category: 'Sweet Goods',
      items: [
        { item: 'Kolache', price: '1.50' },
        { item: 'Cottage Cheese Cake With Peach', price: '2.00' },
        { item: 'Crêpes with salted caramel 5ps.', price: '6.50' },
        { item: 'Whole King Cake', price: '19.95' },
        { item: 'Cottage Cheese Cake', price: '1.50' },
        { item: 'Zhaggy Cake', price: '3.50' },
        { item: 'Plain Crêpes 9ps.', price: '9.00' },
        { item: 'Blueberry with Cottage Cheese Tart', price: '15.00' }
      ]
    }
  ],
  'Savory': [
    {
      category: 'Savory Goods',
      items: [
        { item: 'Small Samsa', price: '2.50' },
        { item: 'Pirozhki', price: '2.50' },
        { item: 'Gevrek', price: '1.50' },
        { item: 'Quiche Large', price: '15.00' },
        { item: 'Big Samsa', price: '3.50' },
        { item: 'Pirozhki with Meat', price: '3.50' },
        { item: 'Pumpkin Pie with Onion', price: '3.50' }
      ]
    }
  ]
}
