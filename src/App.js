import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { reduxTest } from './Store/actions/authExp';
import * as acts from './Store/actions';

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
        <button onClick={this.props.onTest}>
        test now
        </button>

        <h1>{this.props.count}</h1>

        <button onClick={this.props.onAuth}>
        Login
        </button>

        <section>
          
          <br/>
          <h2>{this.props.userNamer}</h2>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    count: state.test.count,
    userNamer: state.auth.userName,
    userInfo: state.auth.userInfo
  };
};

const mapDispactchToProps = dispatch => {
  return{
    onTest: () => dispatch(reduxTest()),
    onAuth: () => dispatch(acts.fbSignIn())
  };
};

export default connect( mapStateToProps, mapDispactchToProps )( App );
