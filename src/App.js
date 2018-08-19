import React, { Component } from 'react';
import './App.css';
import Layout from './Containers/Layout';
import logo from './plane_grad.svg';

// import { reduxTest } from './Store/actions/authExp';
// import * as acts from './Store/actions';

//Libraries
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

//Containers
import Dash from './Containers/Dashboard';

class App extends Component {

  state = {
    
  }

  render() {
    return (
      <div>
        <Layout>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to TDC|DE</h1>
                
            </header>
          <Switch>
                  <Route path="/" to={Dash} />
                </Switch>
        </Layout>
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

export default withRouter(connect( mapStateToProps, mapDispactchToProps )( App ));
