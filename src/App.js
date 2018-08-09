import React, { Component } from 'react';
import logo from './plane_grad.svg';
import './App.css';
import Layout from './Containers/Layout';

// import { reduxTest } from './Store/actions/authExp';
// import * as acts from './Store/actions';

import { connect } from 'react-redux';

class App extends Component {

  state = {
    
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
  return{

  };
};

const mapDispactchToProps = dispatch => {
  return{

  };
};

export default connect( mapStateToProps, mapDispactchToProps )( App );
