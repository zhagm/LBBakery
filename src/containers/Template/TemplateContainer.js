import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Template } from 'components';
import { appWrap } from 'sharedStyles/styles.css';

class TemplateContainer extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div className={appWrap}>
        <Template />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer);
