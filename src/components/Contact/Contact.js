import React, { Component } from 'react';
import { paragraph, lightHr, infoLink } from './styles.css';
import { centerWrap } from 'sharedStyles/styles.css';
import { Footer } from 'components';
export default class Contact extends Component {
  render () {
    return (
      <div className={centerWrap}>
        <h1>{'Contact Us'}</h1>
        <div className={paragraph}>
          <p>You can find our contact info below.</p>
          <br/>
          <p>Phone: <b><a className={infoLink} href="tel:+1-240-360-3697">(240)-360-3697</a></b>.</p>
          <p>Email: <b><a className={infoLink} target='_tab' href="mailto:labohemia@lbbakery.com">LaBohemia@lbbakery.com</a></b>.</p>
          <hr className={lightHr}/>
          <p>Feel free to leave us feedback on social media, we love hearing from our customers!</p>
          <Footer />
          <hr className={lightHr}/>

        </div>
      </div>
    );
  }
}
