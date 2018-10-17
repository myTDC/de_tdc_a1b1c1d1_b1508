import React, { Component } from "react";

//Libraries
import { connect } from "react-redux";
import './Drawer.css';
//Components


//Actions
//import * as acts from "../../Store/actions";
//import { watchFile } from "fs";



const styles = ({
    drawer: {
        color: '#EEF',
        height: '100%',
        overflowY: 'true',
    },
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
	

class Drawer extends Component {
	state = {};

    componentWillMount(){
        console.log('[Comp/Drawer] userHistory is: ', Object.values(this.props.userReadList));
        //getReadHistory();
    };

	render() {
		// const artList = Object.values(this.props.articles);
		//const orgTimeline = Object.values(this.props.userLearnedProg);
        // const history = Object.values(this.props.userLearnedProg);
        
        const readArticles = Object.values(this.props.userReadList);
        
        //let readArticles = history.filter((val, artList) => {
        //     console.log(readArticles);
        //     return artList[val];
        // });

		const tdcTimelineDrawer = (
            <React.Fragment>
                <h1> Process ArtList Data </h1>
				{readArticles.map(element => (
					<div style={styles.articleCard} key={element.id}>
						<section>
							<h4 style={styles.Favtitle}> {element.title|| "Article Title"} </h4>
							<h4 style={styles.author}>by: {element.author|| "author"}</h4>
						</section>
						<section>
							<h4 style={styles.textRight}> {element.views || "views"}</h4>
							<h4 style={styles.textRight}> {element.favdate || "favorite date"} </h4> 
						</section>
					</div>
				))}
			</React.Fragment>
		);

		const userHistoryDrawer = (
            <React.Fragment>
                <h1> Process ArtList Data </h1>
				{readArticles.map(artObj => (
					<div style={styles.articleCard} key={artObj.id}>
						<section>
							<h4 style={styles.Favtitle}> {artObj.title|| "Article Title"} </h4>
							<h4 style={styles.author}>by: {artObj.author|| "author"}</h4>
						</section>
						<section>
							<h4 style={styles.textRight}> {artObj.views || "views"}</h4>
							<h4 style={styles.textRight}> {artObj.favdate || "favorite date"} </h4> 
						</section>
					</div>
				))}
			</React.Fragment>
		);
		
        let drawer = null;
        let userDrawerClasses = 'drawer user';
        let orgDrawerClasses = 'drawer tdc';
		if (this.props.drawerUser) {
            userDrawerClasses = 'drawer user open';
            drawer = userHistoryDrawer;
        }
        else if (this.props.drawerOrg){
            orgDrawerClasses = 'drawer tdc open';
            drawer = tdcTimelineDrawer;
        }
		// if(this.props.children === "org-timeline"){
		// 	drawer = tdcTimelineDrawer;
		// }else /*if(this.props.children === "user-history")*/{
		// 	drawer = userHistoryDrawer;
		// }

		return (
            <div style={styles.drawer}>
                <div className={userDrawerClasses}>
                    {drawer/**/}
                </div>
                <div className={orgDrawerClasses}>
                    {drawer/**/}
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

		userReadList: state.user.learnProgress.readList,
	};
};

const mapDispactchToProps = dispatch => {
	return {
		//writeTest: (uID, uGname, uFname, uEmail, uPic, uPhone) => dispatch(acts.writeUserPersonalInfo(uID, uGname, uFname, uEmail, uPic, uPhone)),
	};
};

export default connect(mapStateToProps, mapDispactchToProps)(Drawer);