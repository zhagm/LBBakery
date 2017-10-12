import React, { Component } from 'react';
import { centerWrap } from 'sharedStyles/styles.css';
import { Location } from 'components';
import key from 'keys';

export default class Locations extends Component {
  render () {
    return (
      <div className={centerWrap}>
        {locations.map((l,i,a) => (
          <Location key={i} loc={l} />
        ))}
      </div>
    );
  }
}

let locations = [
  {
    name: "Rockville",
    description: "This is our main location.",
    address: "5540 Wilkins Court, Rockville, MD 20852",
    mapURL: `https://www.google.com/maps/embed/v1/place?q=La%20Bohemia%20Bakery&key=${key}`,
    hours: [ 'Mon-Thur: 7am - 5pm', 'Fri-Sat: 7am - 6pm', 'Sunday: 7am - 2pm' ],
    coordinates: ['39.05799', '-77.112348']
  },
  {
    name: "Bethesda",
    description: "We have a location at the Bethesda Farm Womens' Market.",
    address: "7155 Wisconsin Ave, Bethesda, MD 20814",
    mapURL: `https://www.google.com/maps/embed/v1/place?q=Bethesda%20Farm%20Womens%20market&key=${key}`,
    hours: [ 'Wed, Fri, Sat: 8am - 4pm' ],
    coordinates: ['38.9810919', '-77.0920889']
  }
];
