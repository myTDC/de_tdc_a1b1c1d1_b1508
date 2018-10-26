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
        overflowY: 'visible',
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
    
    articleCard: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '3px solid #D0FFE9',
        width: '96%',
        height: '8vh',
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
    // todoitem: {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     width: '87%',
    //     height: '8vh',
    //     padding: 0,
    //     margin: 4,
    //     marginLeft: 20,
    //     marginBottom: 8,
    //     borderRadius: '.2vh',
    //     background: '#F9F9F9',
    //     boxShadow: '1px 1px 3px rgba(0,0,0,16%)',
    //     fontFamily: 'Raleway, sans-serif',
    //     fontSize: '1rem',
    //     fontWeight: '600',
    //     color: '#4e4e4e',
    // },

    // todotext: {
    //     fontFamily: 'Raleway, sans-serif',
    //     fontSize: '1rem',
    //     fontWeight: '600',
    //     color: '#4e4e4e',
    //     maxWidth: '70%',
    //     marginTop: 5,
    //     marginRight: 0,
    //     marginLeft: 18,
    //     padding: 0,
    //     alignText: 'left',
    // },

    CdatesText: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '13px',
        fontWeight: '700',
        color: '#4e4e4e',
        marginTop: 0,
        marginRight:18,
        lineHeight: 0.3,
        padding: 0,
    },
});
	

class Drawer extends Component {
	state = {};

    componentDidMount(){
        console.log('[Comp/Drawer] userHistory is: ', Object.values(this.props.userReadList));
        //getReadHistory();
    };

	render() {
		// const artList = Object.values(this.props.articles);
		//const orgTimeline = Object.values(this.props.userLearnedProg);
        // const history = Object.values(this.props.userLearnedProg);
        
        const readArticles = Object.values(this.props.userReadList||{},{},{},{},{},{},{});
        let todoList = Object.values(this.props.userTodoList||{},{},{},{},{},{},{});

        // const datify=(time)=> {
        //     const dateObj = new Date(time);
        //     //let timeNowOld = 
        //     return dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
        // };

        const getMonthName = (monthnum) =>{
            switch(monthnum){
                case 0 : return "JAN";
                case 1 : return "FEB";
                case 2 : return "MAR";
                case 3 : return "APR";
                case 4 : return "MAY";
                case 5 : return "JUN";
                case 6 : return "JUL";
                case 7 : return "AUG";
                case 8 : return "SEP";
                case 9 : return "OCT";
                case 10 : return "NOV";
                case 11 : return "DEC";
                default: return null;
            }
        }

        const datifyObj=(time)=> {
            const datedObj = new Date(time);
            
            // let dateObj = {
            //     date: datedObj.getDate(),
            //     month: datedObj.getMonth(),
            //     year: datedObj.getFullYear()
            // };

            // console.log('[Cont/Drawer/datifyOb] date:', dateObj);
            return {
                date: datedObj.getDate(),
                month: datedObj.getMonth(),
                year: datedObj.getFullYear()
            };
        };
        
        //let readArticles = history.filter((val, artList) => {
        //     console.log(readArticles);
        //     return artList[val];
        // });

        let pendingTodoCount = 5;

        const drawerTodo = (
            <React.Fragment>
                <h1 > ToDos: {pendingTodoCount} </h1>
                <h4 className={'todoText'}> You should consider doing the following to make the most of TDC </h4>
                {todoList.map(todoList => (
                    <div className={'todoitem'} key={todoList.title + todoList.setOn}>
                        <section className={'todoDates'}>
                            <h4 className={'completeByDate'}> {datifyObj(todoList.tobecompletedBy).date} </h4> 
                            <h4 className={'completeByMonth'}> {getMonthName(datifyObj(todoList.tobecompletedBy).month)} </h4>
                        </section>
                        <p className={'todoTitle'}> {todoList.title} </p>    
                    </div>
                ))}
            </React.Fragment>
        )

		// const tdcTimelineDrawer = (
        //     <React.Fragment>
        //         <h1> Process ArtList Data </h1>
		// 		{readArticles.map(element => (
		// 			<div style={styles.articleCard} key={element.id}>
		// 				<section>
		// 					<h4 style={styles.Favtitle}> {element.title|| "Article Title"} </h4>
		// 					<h4 style={styles.author}>by: {element.author|| "author"}</h4>
		// 				</section>
		// 				<section>
		// 					<h4 style={styles.textRight}> {element.views || "views"}</h4>
		// 					<h4 style={styles.textRight}> {element.favdate || "favorite date"} </h4> 
		// 				</section>
		// 			</div>
		// 		))}
		// 	</React.Fragment>
		// );

		const userHistoryDrawer = (
            <React.Fragment>
            <h1 > Read History: </h1>
                <h1 className={'histDrawerTitle'}> You've Read {readArticles.length} out of 30 Articles</h1>
				{readArticles.map(artObj => (
                    <div className={'histCard'} key={artObj.id}>
                        <p className={'histCardTitle'}> {artObj.title|| "Article Title"} </p>
                        <p className={'histCardCategory'}> {artObj.category|| "Category"}</p>
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
        else if (this.props.drawerTodo){
            orgDrawerClasses = 'drawer tdc open';
            drawer = drawerTodo;
        }
        // else if (this.props.drawerOrg){
        //     orgDrawerClasses = 'drawer tdc open';
        //     drawer = tdcTimelineDrawer;
        // }

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
        userTodoList: state.user.todolist,
	};
};

const mapDispactchToProps = dispatch => {
	return {
		//writeTest: (uID, uGname, uFname, uEmail, uPic, uPhone) => dispatch(acts.writeUserPersonalInfo(uID, uGname, uFname, uEmail, uPic, uPhone)),
	};
};

export default connect(mapStateToProps, mapDispactchToProps)(Drawer);

/* 
<View style={{
        flex: 1,
        width: 500,
        height: 500,
      }}>
        <View style={{
          flex: 1,
          width: 100,
          height: 100,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexGrow: 0,
        }}>
          <View style={{
            flex: 1,
            width: 80,
            height: 80,
          }} />
        </View>
        <View style={{
          flex: 1,
          width: 100,
          height: 100,
          flexGrow: 1,
        }} />
      </View>
*/