import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Error } from 'components';
import { appWrap } from 'sharedStyles/styles.css';

class ErrorContainer extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div className={appWrap}>
        <h1>{'404 Error: PAGE NOT FOUND'}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorContainer);
