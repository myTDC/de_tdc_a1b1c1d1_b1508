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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
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
