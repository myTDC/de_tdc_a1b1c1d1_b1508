import React, { Component } from 'react';
import './App.css';
import Layout from './Containers/Layout';


// import { reduxTest } from './Store/actions/authExp';
// import * as acts from './Store/actions';

//Libraries
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

//Containers
import Dash from './Containers/Dashboard';
import Learn from './Containers/Learn';
import Participate from './Containers/Participate';

class App extends Component {

	state = {

	}

	render() {
		return (
			<div>
				<Layout>
				

				{this.props.userId ? 
					<Switch>
					  <Route exact path='/' component={Dash}/> 
					  <Route exact path='/learn' component={Learn}/>
					  <Route exact path='/mydash' component={Dash}/>
					  <Route exact path='/participate' component={Participate}/>
					</Switch>
					: null}

					
					
				</Layout>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userId: state.auth.user.Id//,
	};
};

const mapDispactchToProps = dispatch => {
	return {

	};
};

export default withRouter(connect(mapStateToProps, mapDispactchToProps)(App));
