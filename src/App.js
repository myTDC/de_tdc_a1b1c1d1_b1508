import React, { Component } from 'react';
import logo from './plane_grad.svg';
import './App.css';

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
    // if(this.props.isAuthenticated) {
    //   console.log('[App.js] Attempting Auto Login');
    //   this.props.onTryAutoSignup();
    // }
    console.log('[App.js] Attempting Auto Login');
    this.props.onTryAutoSignup();
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
    isAuthenticated: state.auth.user.Id !== null,
    authToken: state.auth.user.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetupAutoLogin: () => dispatch(acts.setupAutoLogin()),
    onTryAutoSignup: () => dispatch(acts.checkAuthState())
  };
};

export default withRouter (connect( mapStateToProps, mapDispatchToProps )( App ));
