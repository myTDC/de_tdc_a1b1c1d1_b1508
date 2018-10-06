import React, { Component } from "react";

//Libraries
import { connect } from "react-redux";
import './Drawer.css';
//Components


//Actions
import * as acts from "../../Store/actions";
//import { watchFile } from "fs";




	

class Drawer extends React.Component {
	state = {
		readArtList : {}
	};

	componentDidMount() {
		this.props.loadTodo(this.props.userId);
	}

	componentDidUpdate() {
		//this.props.onLoad(this.props.userId, this.props.userHistory);
		
		console.log(
			"[Cont/Dash] Components Updated | Current UserID is: ",
			localStorage.getItem("userID")
		);
	};
	componentWillUnmount() {
		//this.getMYVALUES();
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
		let drawerClasses = 'drawer';
		if (this.props.show) {
			drawerClasses = 'drawer open';
		}

		let userReadHistory = Object.values(this.props.userHistory);

		// let templ = (<DataCard
		// 	type="totalArtProgress"
		// 	header="You've read"
		// 	stat="08"
		// 	footer="articles of 30"
		// 	history={userReadHistory} >
		// 	<CardTitle name="USER JOURNEY" />
		// </DataCard>)
		
		return (
			<div className={drawerClasses}>
				
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
		articles: state.content.articles3p,
		uTodo: state.user.todolist,
		userLearnedProg: state.user.learnProgress.read,

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
		OnLoad: (uID, userRHistory) => dispatch(acts.setupAnal(uID, userRHistory)),
		loadTodo: uID => dispatch(acts.readTodo(uID)),
		writeTest: (uID, uGname, uFname, uEmail, uPic, uPhone) => dispatch(acts.writeUserPersonalInfo(uID, uGname, uFname, uEmail, uPic, uPhone)),
		ReadUser: (uID) => dispatch(acts.readUserHistory(uID)),
		updateHistory: (found, uID, id, art) => dispatch(acts.updateUserReadHistory(found, uID, id, art))
	};
};

export default connect(mapStateToProps, mapDispactchToProps)(Drawer);