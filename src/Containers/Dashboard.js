import React, { Component } from 'react';
import './Dashboard.css';

//Libraries
import { connect } from 'react-redux';

//Components
import UserCard from '../Components/DashCards/UserCard';
import DataCard from '../Components/DashCards/DataCard';
import AnalCard from '../Components/DashCards/AnalCard';
import * as chartType from '../Components/Charter';

//Actions
import * as acts from '../Store/actions';


class Dashboard extends Component {
	state = {

	}



	componentDidUpdate() {
		console.log('[Cont/Dash] Components Updated | Current UserID is: ', localStorage.getItem('userID'));
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		// let asyncTester = (
		//     <button onClick={this.props.onTest}>
		//         test now
		//     </button>
		//     <h1>{this.props.count}</h1>
		// );

		let userCard = (
			<div className="cardholder user">
				<UserCard className="card user" />
			</div>
		);

		let todoCard = ( //Also has notifications, last read and 
			<div className="cardholder">
				<strong className="cardTitle">TO-DOs</strong>
				<DataCard className="card todo" />
			</div>
		);

		let learnCard = (
			<div className="cardholder">
				<strong className="cardTitle">LEARNING CURVE</strong>
				<AnalCard className="card learn" charterType={chartType.LINE_CHART} />
			</div>
		);

		let participateCard = (
			//<AnalCard charterType={chartType.DOUGHNUT_CHART} />
			<div className="cardholder">
				<strong className="cardTitle">TDC PARTICIPATION</strong>
				<AnalCard className="card participate" charterType={chartType.RADAR_CHART} />
			</div>
		);

		let bookmarksCard = (
			<div className="cardholder">
				<strong className="cardTitle">FAV READLIST</strong>
				<DataCard
					className="card bookmarks"
					chartData={this.props.chartData}
					chartOptions={this.props.chartOpts}
				/>
			</div>
		)

		let readHistoryCard = (
			<div className="cardholder">
				<strong className="cardTitle">USER JOURNEY</strong>
				<DataCard
					className="card readHistory"
					chartData={this.props.chartData}
					chartOptions={this.props.chartOpts}
				/>
			</div>
		)

		const writetofb = () => {
			this.props.writeTest(this.props.userId, this.props.userNameGiven, this.props.userNameFamily, this.props.userEmail, this.props.userPic, this.props.userPhone);
		}
		// if(this.props.){
		//         signup = (null);
		//         authorizer = (

		//         );
		// }

		// const dash_base = (
		//     <section> 
		//         {signup}
		//         <br/> 
		//         {authorizer} 
		//         <br/> 
		//     </section>
		// );
		//Beginning DomRender
		return (
			<div className="dashboard">
				<div className="cardContainer">
					{userCard}
					{todoCard}
					{learnCard}
					{participateCard}
					{bookmarksCard}
					{readHistoryCard}
				</div>
				<h1 onClick={writetofb}>Welcome to your Dashboard. The heart of DE.</h1>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		userId: state.auth.user.Id,
		userNameGiven: state.auth.user.GivenName,
		userNameFamily: state.auth.user.FamilyName,
		userPic: state.auth.user.PicUrl,
		userEmail: state.auth.user.Email,
		userPhone: state.auth.user.PhoneNumber,

		chartData: state.user.chartdata,
		chartOpts: state.user.chartoptions
	};
};

const mapDispactchToProps = dispatch => {
	return {
		// onAuth: () => dispatch(acts.fbSignIn()),
		onLoad: () => dispatch(acts.setupAnal()),
		writeTest: (uID, uGname, uFname, uEmail, uPic, uPhone) => dispatch(acts.writeUserPersonalInfo(uID, uGname, uFname, uEmail, uPic, uPhone))//,
	};
};

export default connect(mapStateToProps, mapDispactchToProps)(Dashboard);