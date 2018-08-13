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

    componentDidMount(){
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
            <div className="card user">
                <UserCard />
            </div>            
        );

        let todoCard = ( //Also has notifications, last read and 
            <div className="card todo">
                <p className="cardTitle">TO-DOs</p>
                <DataCard 
                    chartData={this.props.chartData} 
                    chartOptions={this.props.chartOpts} 
                />
            </div>
        );

        let learnCard = (
            <div className="card learn">
                <p className="cardTitle">LEARNING CURVE</p>
                <AnalCard charterType={chartType.LINE_CHART}/>
            </div>
        );
        
        let participateCard = (
            //<AnalCard charterType={chartType.DOUGHNUT_CHART} />
            <div className="card participate">
                <p className="cardTitle">TDC PARTICIPATION</p>
                <AnalCard charterType={chartType.RADAR_CHART} />
            </div>
        );

        let bookmarksCard = (
            <div className="card bookmarks">
                <p className="cardTitle">FAV READLIST</p>
                <DataCard 
                    chartData={this.props.chartData} 
                    chartOptions={this.props.chartOpts} 
                />
            </div>
        )

        let readHistoryCard = (
            <div className="card readHistory">
                <p className="cardTitle">USER JOURNEY</p>
                <DataCard 
                    chartData={this.props.chartData} 
                    chartOptions={this.props.chartOpts} 
                />
            </div>
        )

        const writetofb = () => {
            this.props.writeTest(this.props.userId, this.props.userNameGiven);
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
                <h1 onClick={writetofb}>Welcome to your Dashboard. The heart of DE.</h1>
                    {userCard}
                    {todoCard}
                    {learnCard}
                    {participateCard}
                    {bookmarksCard}
                    {readHistoryCard}
                </div>
            </div>
        );
      }
}
const mapStateToProps = state => {
    return{
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
    return{
        // onAuth: () => dispatch(acts.fbSignIn()),
        onLoad: () => dispatch(acts.setupAnal()),
        writeTest: (uID, uGName) => dispatch(acts.writeUserPersonalInfo(uID, uGName))//,
    };
};

export default connect( mapStateToProps, mapDispactchToProps )( Dashboard );