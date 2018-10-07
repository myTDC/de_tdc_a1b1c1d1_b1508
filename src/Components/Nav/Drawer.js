import React from "react";

//Libraries
import { connect } from "react-redux";
import './Drawer.css';
//Components


//Actions
//import * as acts from "../../Store/actions";
//import { watchFile } from "fs";



const styles = ({
    parent :{
        position: 'relative',
        width:'100%',
        margin: 0,
        padding: '4px',
    },
    row: {
        display: 'flex',
        width: '100%',
        height: 250,
        overflow: 'hidden',
        alignItems: 'flex-start',
        padding: 0,
        flexWrap: 'wrap',
        backgroundColor: '#FFF8E7',
        boxShadow: '3px 3px 4px #E0E0E0',
    },
    /* progressBar: {
        position: 'absolute',
        bottom: '50px',
        minHeight: '10px',
        width: {width},
        right: '0',
        transform: 'rotate(90deg)',
        background: 'linear-gradient(90deg, red, yellow, green)',
        zIndex: '100',
    }, */
    
    // columnRight: {
    //     flex: 1,
    //     width: '79%',
    //     maxHeight: '80%',
    //     marginTop: 24,
    //     marginBottom: 24,
    //     marginLeft: 8,
    //     overflow: 'scroll',
    //     padding: 0,
    // },
    articleCard: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '3px solid #D0FFE9',
        width: '96%',
        height: '20%',
        padding: 0,
        marginLeft: '2%',
        marginBottom: '4%',
        marginRight: '2%',
        background: '#F9F9F9',
        boxShadow: '1px 1px 3px rgba(0,0,0,16%)'
    },
    Favtitle: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '22px',
        fontWeight: '700',
        color: '#4e4e4e',
        marginTop:10,
        marginBottom:15,
        marginRight:0,
        marginLeft:18,
        padding: 0,
    },

    author: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        color: '#4e4e4e',
        marginLeft: 18,
        marginRight:0,
        marginBottom:15,
        lineHeight: 0.3,
        padding: 0,
    },

    textRight: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '16px',
        fontWeight: '500',
        color: '#4e4e4e',
        marginTop:10,
        marginRight:20,
        padding: 0,
    },
});
	

class Drawer extends React.Component {
	state = {};

	componentWillMount(){
		console.log('[Comp/Drawer] userHistory is: ', this.props.userLearnedProg);
	};

	render() {
		let drawerClasses = 'drawer';
		if (this.props.show) {
			drawerClasses = 'drawer open';
		}

		const artList = Object.values(this.props.artList||'null');
		const orgTimeline = Object.values(this.props.userLearnedProg||'null');
		const userHistory = this.props.userLearnedProg||0;

		const tdcTimelineDrawer = (
			<div className={'tdc'}>
				{orgTimeline.map(orgTimeline => (
					<div style={styles.articleCard} key={orgTimeline}>
					<section>
						<h4 style={styles.Favtitle}> {artList.title|| "Article Title"} </h4>
						<h4 style={styles.author}>by: {artList.author|| "author"}</h4>
					</section>
					<section>
						<h4 style={styles.textRight}> {artList.views || "views"}</h4>
						<h4 style={styles.textRight}> {artList.favdate || "favorite date"} </h4> 
					</section>
					</div>
				))}
			</div>
			
		)

		const userHistoryDrawer = (
			<div className={'user'}>
				{artList.map(artList => (
					<div style={styles.articleCard} key={userHistory.id}>
						<section>
							<h4 style={styles.Favtitle}> {artList.title|| "Article Title"} </h4>
							<h4 style={styles.author}>by: {artList.author|| "author"}</h4>
						</section>
						<section>
							<h4 style={styles.textRight}> {artList.views || "views"}</h4>
							<h4 style={styles.textRight}> {artList.favdate || "favorite date"} </h4> 
						</section>
					</div>
				))}
			</div>
		)
		
		let drawer = {};
		if(this.props.children === "org-timeline"){
			drawer = tdcTimelineDrawer;
		}else /*if(this.props.children === "user-history")*/{
			drawer = userHistoryDrawer;
		}

		return (
			<div className={drawerClasses}>
		{drawer/**/}
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
		favList: state.user.favList,
	};
};

const mapDispactchToProps = dispatch => {
	return {
		//writeTest: (uID, uGname, uFname, uEmail, uPic, uPhone) => dispatch(acts.writeUserPersonalInfo(uID, uGname, uFname, uEmail, uPic, uPhone)),
	};
};

export default connect(mapStateToProps, mapDispactchToProps)(Drawer);