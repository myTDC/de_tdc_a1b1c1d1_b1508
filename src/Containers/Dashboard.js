import React, { Component } from "react";
import "./Dashboard.css";

//Libraries
import { connect } from "react-redux";

//Components
import UserCard from '../Components/DashCards/UserCard';
import UserTodo from "../Components/DashCards/UserTodo";
import DataCard from "../Components/DashCards/DataCard";
import AnalCard from "../Components/DashCards/AnalCard";
import CardTitle from "../Components/DashCards/CardTitle";
import * as chartType from '../Components/Charter';

//Actions
import * as acts from "../Store/actions";
//import { watchFile } from "fs";

class Dashboard extends Component {
	state = {};

	componentDidUpdate() {
		//this.props.onLoad(this.props.userId, this.props.userHistory);
		this.props.loadTodo(this.props.userId);
		console.log(
			"[Cont/Dash] Components Updated | Current UserID is: ",
			localStorage.getItem("userID")
		);
	};
	componentWillUnmount() {
		//this.getMYVALUES();
	}
	getMYVALUES() {
		this.props.onLoad(this.props.userId, this.props.userHistory);
		this.props.loadTodo(this.props.userId);
	}
	render() {
		const writetofb = () => {
			this.props.writeTest(
				this.props.userId,
				this.props.userNameGiven,
				this.props.userNameFamily,
				this.props.userEmail,
				this.props.userPic,
				this.props.userPhone
			);
		};

		let userReadHistory = Object.values(this.props.userHistory);
		
		return (
			<div className="cover">
				<div className="dashboard">
					<div className="cardContainer">
						<UserCard nameTitle="Mr." firstName="Abhishek" lastName="Patwa" post="COO" company="Festive"/>
						<UserTodo
							type="userTodos"
							header="completed"
							stat="02"
							footer="out of 06">
							<CardTitle name="TODO & MORE" />
						</UserTodo>

						<AnalCard
							type="learnProgress"
							header="You are reading"
							stat="1.2"
							footer="every day (avg)"
							chartType={chartType.LINE_CHART}
							chartWidth="600" chartHeight="200"
							chartLabels={this.props.chartLineLabels}
							chartData={this.props.chartLineData} chartDataBaseline={null}>
							<CardTitle name="LEARN CURVE" />
						</AnalCard>

						<AnalCard
							type="participateProgress"
							header="completed"
							stat="02"
							footer="Sections of 7"
							chartType={chartType.RADAR_CHART}
							chartWidth="600" chartHeight="240"
							chartLabels={this.props.chartRadarLabels}
							chartData={this.props.chartRadarData} chartDataBaseline={this.props.chartRadarDataBaseline}>
							<CardTitle name="PREPARATION" />
						</AnalCard>

						<DataCard
							type="Favorites"
							header="you have"
							stat="03"
							footer="favorites">
							<CardTitle name="FAV READLIST" />
						</DataCard>

						<DataCard
							type="totalArtProgress"
							header="You've read"
							stat="08"
							footer="articles of 30"
							history={userReadHistory} >
							<CardTitle name="USER JOURNEY" />
						</DataCard>
					</div>
					<h1 onClick={writetofb}>
						Welcome to your Dashboard. The heart of DE.
          			</h1>
				</div>
			</div>
		);
	};
};

const mapStateToProps = state => {
	return {
		userId: state.auth.user.Id,
		userNameGiven: state.auth.user.GivenName,
		userNameFamily: state.auth.user.FamilyName,
		userPic: state.auth.user.PicUrl,
		userEmail: state.auth.user.Email,
		userPhone: state.auth.user.PhoneNumber,

		userHistory: state.user.history,

		chartLineData: state.user.readHistoryLineData,
		chartLineLabels: state.user.readHistoryLineLabel,
		chartRadarData: state.user.readHistoryRadarData,
		chartRadarDataBaseline: state.user.readHistoryRadarDataBaseline,
		chartRadarLabels: state.user.readHistoryRadarLabel
	};
};

const mapDispactchToProps = dispatch => {
	return {
		// onAuth: () => dispatch(acts.fbSignIn()),
		onLoad: (uID, userRHistory) => dispatch(acts.setupAnal(uID, userRHistory)),
		loadTodo: uID => dispatch(acts.addToDo(uID)),
		writeTest: (uID, uGname, uFname, uEmail, uPic, uPhone) => dispatch(acts.writeUserPersonalInfo(uID, uGname, uFname, uEmail, uPic, uPhone)),
		ReadUser: (uID) => dispatch(acts.readUserHistory(uID)),
		updateHistory: (found, uID, id, art) => dispatch(acts.updateUserReadHistory(found, uID, id, art))
	};
};

export default connect(mapStateToProps, mapDispactchToProps)(Dashboard);

// let asyncTester = (
//     <button onClick={this.props.onTest}>
//         test now
//     </button>
//     <h1>{this.props.count}</h1>
// );

/* 		let userCard = (
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
						chartData={null}
						chartOptions={null}
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
			) */

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