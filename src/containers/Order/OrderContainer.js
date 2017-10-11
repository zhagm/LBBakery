import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Order } from 'components';
import { appWrap } from 'sharedStyles/styles.css';

class OrderContainer extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div className={appWrap}>
        <Order />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
