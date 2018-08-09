import React, { Component } from 'react';
import * as acts from '../Store/actions';
import { connect } from 'react-redux';
import SignUpHero from '../Components/SignupHero';

class Layout extends Component {

    state = {
        
    }

    componentDidUpdate(){
        const uID = localStorage.getItem('userID');
        if(!uID) console.log("User Hasn't logged in");
        else console.log('Logged In User is:', uID);
        console.log('Components Updated');
    }

    componentDidMount(){
        // console.log( 'Raw User Data', this.props.userRAW);
        // console.log( 'Raw User Info Data', this.props.userinfoRAW);
        // console.log(new Date());
        // //console.log(new Date(new Date().getTime()+3600000));
        // const today = new Date();
        // console.log('0'+today.getUTCDate()+'/0'+(today.getUTCMonth()+1));
    }

    render(){

        // let asyncTester = (
        //     <button onClick={this.props.onTest}>
        //         test now
        //     </button>
        //     <h1>{this.props.count}</h1>
        // );

        

        

        

        
        
        let authorizer = (
            <button onClick={this.props.onAuth}>
                Login
            </button>
        );

        let signup = (
            <SignUpHero clicked={this.props.onAuth} heroAction="Lift Off"/>
        )

        if(this.props.userId){
                signup = (null);
                authorizer = (
                    <section>
                        <button onClick={this.props.onLogOut}>
                            Logout
                        </button>
                        <h2>{this.props.userNameGiven}</h2>
                        <h3>{this.props.userNameFamily}</h3>
                        <img src={this.props.userPic} alt="Users DP" />
                        <h4>{this.props.userEmail}</h4>
                        <h4>{this.props.userPhone}</h4>
                    </section>
                );
        }
        const dash_base = (
            <section> 
                {signup}
                <br/> 
                {authorizer} 
                <br/> 
            </section>
        );
        //Beginning DomRender
        return (
            <div className="App">
                {dash_base}

                <button onClick={this.props.onLogOut}>Hard Logout</button>
            </div>
        );
      }
    }
    
const mapStateToProps = state => {  //Refer to Redux Dev Tools chart to get a better idea of heirarchy post
            //count: state.test.count,
    return{
        userId: state.auth.user.Id,
        userNameGiven: state.auth.user.GivenName,
        userNameFamily: state.auth.user.FamilyName,
        userPic: state.auth.user.PicUrl,
        userEmail: state.auth.user.Email,
        userPhone: state.auth.user.PhoneNumber

        // userRAW:state.auth.user.TEST_USER_RAW,
        // userinfoRAW:state.auth.user.TEST_USERINFO_RAW
};};

const mapDispactchToProps = dispatch => {
    return{
        //onTest: () => dispatch(reduxTest()),
        onAuth: () => dispatch(acts.fbSignIn()),
        onLogOut: () => dispatch(acts.logout())
};};

export default connect( mapStateToProps, mapDispactchToProps )( Layout );    