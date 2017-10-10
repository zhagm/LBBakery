import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Menu } from 'components';
import { appWrap } from 'sharedStyles/styles.css';

class MenuContainer extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div className={appWrap}>
        <p>hello</p>
        {/* <Menu /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
