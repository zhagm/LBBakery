import React, { Component } from 'react';
import { SubMenu } from 'components';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Pastries'
    }
  }
  render () {
    return (
      <div>
        
        { props[this.state.active].map((sub, i, a) => (
          <SubMenu category={sub.category} items={sub.items} />
        ))}
      </div>
    );
  }
}


let props =
{
  'Pastries': [
    {
      category: 'Croissants',
      items: [
        { item: 'Butter Croissant', price: 1.95 },
        { item: 'Chocolate Croissant', price: 2.05 },
        { item: 'Almond Croissant', price: 2.95 },
        { item: 'Almond Chocolate Croissant', price: 3.05 }
      ]
    },
    {
      category: 'Other Pastries',
      items: [
        { item: 'Canelé', price: 1.10 },
        { item: 'Chocolate Moelleux', price: 2.75 },
        { item: 'Bread Pudding', price: 2.05 },
        { item: 'Strudel', price: 7.95 },
        { item: 'Raisin Whirl', price: 2.45 },
        { item: 'Coconut Rock', price: 1.30 },
        { item: 'Eclair', price: 1.95 },
        { item: 'Kouign-amann', price: 3.50 },
        { item: 'Apple Turnover', price: 2.55 }
      ]
    },
    {
      category: 'Mini Pastries',
      items: [
        { item: 'Mini Croissant', price: 1.20 },
        { item: 'Mini Chocolate Croissant', price: 1.20 },
        { item: 'Mini Raisin Whirl', price: 1.20 },
        { item: 'Mini Canelé', price: 0.55 },
        { item: 'Mini Apple Turnover', price: 1.50 }
      ]
    }
  ],
  'head': [
    {
      category: 'subhead',
      items: [
        { item: 'Item Name', price: 1.00 },
        { item: 'Item Name', price: 1.00 },
        { item: 'Item Name', price: 1.00 },
        { item: 'Item Name', price: 1.00 }
      ]
    },
  ]
}
