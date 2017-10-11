import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Locations } from 'components';
import { appWrap } from 'sharedStyles/styles.css';

class LocationsContainer extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div className={appWrap}>
        <Locations />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsContainer);
