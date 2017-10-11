import React, { Component } from 'react';
import { SubMenu, MenuNav } from 'components';
import { centerWrap } from 'sharedStyles/styles.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Pastries'
    }

    this.changeActive = this.changeActive.bind(this)
  }
  changeActive (active) {
    this.setState({ active });
  }
  render () {
    return (
      <div className={centerWrap}>
        <MenuNav sections={navArray} handleClick={this.changeActive} active={this.state.active}/>
        { menu[this.state.active].map((sub, i, a) => (
          <SubMenu key={i} category={sub.category} items={sub.items} />
        ))}
      </div>
    );
  }
}

let navArray = ['Pastries', 'Tarts & Cakes', 'Savory Baked Goods', 'Breads', 'Sandwiches', 'Beverages', 'Deals'];
let menu =
{
  'Pastries': [
    {
      category: 'Croissants',
      items: [
        { item: 'Butter Croissant', price: '1.95' },
        { item: 'Chocolate Croissant', price: '2.05' },
        { item: 'Almond Croissant', price: '2.95' },
        { item: 'Almond Chocolate Croissant', price: '3.05' }
      ]
    },
    {
      category: 'Other Pastries',
      items: [
        { item: 'Canelé', price: '1.10' },
        { item: 'Chocolate Moelleux', price: '2.75' },
        { item: 'Bread Pudding', price: '2.05' },
        { item: 'Strudel', price: '7.95' },
        { item: 'Raisin Whirl', price: '2.45' },
        { item: 'Coconut Rock', price: '1.30' },
        { item: 'Eclair', price: '1.95' },
        { item: 'Kouign-amann', price: '3.50' },
        { item: 'Apple Turnover', price: '2.55' }
      ]
    },
    {
      category: 'Mini Pastries',
      items: [
        { item: 'Mini Croissant', price: '1.20' },
        { item: 'Mini Chocolate Croissant', price: '1.20' },
        { item: 'Mini Raisin Whirl', price: '1.20' },
        { item: 'Mini Canelé', price: '0.55' },
        { item: 'Mini Apple Turnover', price: '1.50' }
      ]
    }
  ],
  'Tarts & Cakes': [
    {
      category: 'Tarts',
      items: [
        { item: 'Almond Caramel Tart', price: '15.00' },
        { item: 'Apple Tart', price: '12.00' },
        { item: 'Apricot Tart', price: '15.00' },
        { item: 'Blueberry Tart with Custard Cream', price: '17.00' },
        { item: 'Cherry Tart', price: '15.00' },
        { item: 'Lemon Tart', price: '12.00' },
        { item: 'Peach Tart', price: '12.00' },
        { item: 'Pear Tart', price: '12.00' },
        { item: 'Raspberry Tart', price: '19.00' },
        { item: 'Strawberry Tart', price: '15.00' }
      ]
    },
    {
      category: 'Tartlettes',
      items: [
        { item: 'Fruit Tartelette', price: '3.50' },
        { item: 'Berry Tartelette', price: '4.00' },
        { item: 'Blueberry Tartelette', price: '4.50' },
        { item: 'Cherry Tartelette', price: '4.00' },
        { item: 'Raspberry Tartelette', price: '5.50' }
      ]
    },
    {
      category: 'Cakes',
      items: [
        { item: 'La Bohemia Cake', price: '3.50' },
        { item: 'Honey Cake', price: '3.50' }
      ]
    }
  ],
  'Savory Baked Goods': [
    {
      category: 'Savory Baked Goods',
      items: [
        { item: 'Cheese Envelope', price: '3.50' },
        { item: 'Cheese Puff', price: '0.70' },
        { item: 'Chicken Meatball Roll', price: '1.50' },
        { item: 'Kloubasnek', price: '2.50' },
        { item: 'Spinach Quiche Small', price: '3.50' },
        { item: 'Turkey Quiche Small', price: '3.50' },
        { item: 'Spinach & Mozzarella Basket', price: '3.50' },
        { item: 'Vegan Spinach Turnover', price: '3.50' }
      ]
    },
  ],
  'Breads': [
    {
      category: 'subhead',
      items: [
        { item: 'Item Name', price: 1.00 }
      ]
    },
  ],
  'Sandwiches': [
    {
      category: 'subhead',
      items: [
        { item: 'Item Name', price: 1.00 }
      ]
    },
  ],
  'Beverages': [
    {
      category: 'subhead',
      items: [
        { item: 'Item Name', price: 1.00 }
      ]
    },
  ],
  'Deals': [
    {
      category: 'subhead',
      items: [
        { item: 'Item Name', price: 1.00 }
      ]
    },
  ]
}
