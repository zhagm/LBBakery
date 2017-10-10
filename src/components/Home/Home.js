import React, { Component } from 'react';
import { container, title, slogan, subHead, logo } from './styles.css';

export default class Home extends Component {
  render () {
    return (
      <div className={container}>
        <img className={logo} src="http://static1.squarespace.com/static/577e6233414fb5812b9b90d4/t/577e80619de4bb0a82751d31/1497148347371/?format=1500w" alt="La Bohemia Logo"/>
        <p className={subHead}>{'European Artisan Bakery'}</p>

        <div className='info'>
          <p className='address'><a href="https://www.google.com/maps/place/La+Bohemia+Bakery/@39.0579941,-77.114542,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7cc2d37b3812f:0x1d1978c156ca652b!8m2!3d39.05799!4d-77.112348">
            5540 Wilkins Court, Rockville, MD, 20852
          </a></p>
          <p className="phoneNumber">+1 240 360 3697</p>
          <a href="mailto:labohemia@lbbakery.com">
            labohemia@lbbakery.com
          </a>
        </div>
      </div>
    );
  }
}
