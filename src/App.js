import React, { Component } from 'react';
import './App.css';
import Layout from './Containers/Layout';
import Dash from './Containers/Dashboard';
import Learn from './Containers/Learn';
import Participate from './Containers/exp/Participate';
// import { reduxTest } from './Store/actions/authExp';
// import * as acts from './Store/actions';

import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

class App extends Component {
  state = {

  };

  render() {
    // const styles = ({
    //   scrollbar: {
    //     position: 'absolute',
    //     width: '10px',
    //     height: '100%',
    //     top: 0,
    //     right: "-10px",
    //     //background: '#042432',
    //     overflow: "hidden scroll",
    //     pointerEvents: "all",
    //   },
    //   scrollbarwindow: {
    //     width: '1px',
    //     height: '100%'
    //   },
    // });
    // <div className="kit-scrollbar with-arrows" style={styles.scrollbar}><div style={styles.scrollbarwindow}></div></div>

    return (
      <div className={'App'}>
        <Layout>
        {this.props.userId ?
          <Switch className = {'appContainer'}>
            <Route exact path='/home' component={Participate} />
            <Route exact path='/' component={Learn} />
            <Route exact path='/learn' component={Learn} />
            <Route exact path='/dashboard' component={Dash} />
            <Route exact path='/events' component={Participate} />
            <Route exact path='/landing' component={Participate} />
            <Route exact path='/free' component={Participate} />
            <Route exact path='/tools' component={Participate} />
          </Switch>
          : null}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.user.Id,
  };
};

const mapDispactchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispactchToProps)(App));
