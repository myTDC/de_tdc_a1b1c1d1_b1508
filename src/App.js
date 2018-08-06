import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dash from './Containers/Dash';

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
        <p className="App-intro">
          <a href='blank' >React:</a> To get started, edit <code>src/App.js</code> and save to reload. 
          <br />
          <a href='blank' >Me:</a> Been There Done That!
        </p>
        <Dash />
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
