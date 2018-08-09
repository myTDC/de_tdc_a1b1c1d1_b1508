import React, { Component } from 'react';
import logo from './plane_grad.svg';
import './App.css';
import _ from 'lodash';

//Libraries
import { Router, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Custom Components
import Layout from './Containers/Layout';
import * as acts from './Store/actions/index';

// import { reduxTest } from './Store/actions/authExp';
// import * as acts from './Store/actions';



class App extends Component {

  state = {
    
  }
  
  componentDidMount () {
    this.props.isAuthenticated();
  }
  
  componentDidUpdate () {
    this.props.onSetupAutoLogin();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TDC|DE</h1>
        </header>
        <Layout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetupAutoLogin: () => dispatch(acts.setupAutoLogin()), //Called when the components updates after login
    isAuthenticated: ()  => dispatch(acts.checkAuthState()) //Called when te component reloads
  };
};

export default withRouter (connect( mapStateToProps, mapDispatchToProps )( App ));
