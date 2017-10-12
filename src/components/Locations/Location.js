import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { locationDiv, mapDiv } from './styles.css';
import {info, addressStyle, hoursStyle, desc } from './styles.css';
let mapStyle = {
  width: '100%'
}

export default class  extends Component {
  render() {
    let { name, description, address, mapURL, hours, coordinates } = this.props.loc;
    return (
      <div className={locationDiv}>
        <h1>{name}</h1>
        <h3 className={desc}>{description}</h3>
        <div className={info}>
          <div className={addressStyle}>
            <h4>Address</h4>
            <p>{address}</p>
          </div>
          <div className={hoursStyle}>
            <h4>Hours</h4>
              {hours.map((c,i) => (
                <p key={i}>{c}</p>
              ))}
          </div>
        </div>
        <div className={mapDiv}>
          <iframe width="600" height="450" frameBorder="0"
            style={mapStyle}
            src={mapURL}
            allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }
}
