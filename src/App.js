import React, { Component } from 'react';
import './App.css';
import Layout from './Containers/Layout';

// import { reduxTest } from './Store/actions/authExp';
// import * as acts from './Store/actions';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends Component {

  state = {
    
  }

  render() {
    return (
      <div>
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

export default withRouter(connect( mapStateToProps, mapDispactchToProps )( App ));
