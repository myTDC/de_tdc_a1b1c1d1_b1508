import React, { Component } from 'react';
import * as acts from './Store/actions';
import { connect } from 'react-redux';

class Dash extends Component {

    state = {
        
    }

    const dash_base = (
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
    )
    render() {
        return (
            <div className="App">
                {this.dash_base}
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

export default connect( mapStateToProps, mapDispactchToProps )( Dash );
    