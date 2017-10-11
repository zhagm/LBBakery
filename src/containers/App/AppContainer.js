import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Nav } from 'components';
import { Footer } from 'components';
import {
  HomeContainer, TemplateContainer, MenuContainer, OrderContainer,
  LocationsContainer, ContactContainer, ErrorContainer
} from 'containers';
import * as thingActionCreators from 'redux/modules/thing';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact={true} path='/' component={HomeContainer} />
            <Route path='/menu' component={MenuContainer} />
            <Route path='/locations' component={LocationsContainer} />
            <Route path='/order' component={OrderContainer} />
            <Route path='/contact' component={ContactContainer} />
            <Route component={ErrorContainer} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {};

export default connect((state) => ({
  state: state
}), (dispatch) => (
  bindActionCreators(thingActionCreators, dispatch)
))(App);
