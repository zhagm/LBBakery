import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Contact } from 'components';
import { appWrap } from 'sharedStyles/styles.css';

class ContactContainer extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div className={appWrap}>
        <Contact />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
