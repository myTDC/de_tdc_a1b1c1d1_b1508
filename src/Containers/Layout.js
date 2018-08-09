import React, { Component } from 'react';
import * as acts from '../Store/actions';
import { connect } from 'react-redux';
import SignUpHero from '../Components/SignupHero';

class Layout extends Component {

    state = {
        
    }

    componentDidUpdate() {
        console.log('[Comp/Layout] Components Updated', localStorage.getItem('userID'));
    }

    render() {

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
            </div>
        );
      }
    }
    
const mapStateToProps = state => {
            //count: state.test.count,
            //No need to access state variables as in the reducer files
            //Refer to Redux Dev Tools chart to get a better idea of heirarchy post
    return{
        userId: state.auth.user.Id,
        userNameGiven: state.auth.user.GivenName,
        userNameFamily: state.auth.user.FamilyName,
        userPic: state.auth.user.PicUrl,
        userEmail: state.auth.user.Email,
        userPhone: state.auth.user.PhoneNumber,
    };
};

const mapDispactchToProps = dispatch => {
    return{
        //onTest: () => dispatch(reduxTest()),
        onAuth: () => dispatch(acts.fbSignIn()),
        onLogOut: () => dispatch(acts.logout())
    };
};

export default connect( mapStateToProps, mapDispactchToProps )( Layout );
    