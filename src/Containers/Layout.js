import React, { Component } from 'react';
import './Layout.css';
// import logo from '../plane_grad.svg';

//Libraries
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import logo from '../plane_grad.svg';

//Containers
import Dash from './Dashboard';

//Components
import SignUpHero from '../Components/SignupHero';

//Actions
import * as acts from '../Store/actions';
class Layout extends Component {

    state = {
        
    }

   

    componentDidUpdate() {
        console.log('[Comp/Layout] Components Updated | Current UserID is: ', localStorage.getItem('userID'));
        console.log('[Comp/Layout] Components Updated | Current ArtList is: ', this.props.articles);
    }

    render(props) {
        let styles = {
            root: {
              flexGrow: 1,
            },
            colorDefault:{
              backgroundColor: blueGrey[900],
            },
          
            text:{
              marginLeft: "25%",
              color: blueGrey[300],
              fontWeight: 700,
            },
          
            flex: {
              flexGrow: 1,
            },
            menuButton: {
              marginLeft: -12,
              marginRight: 20,
            },
            link: {
              marginLeft: 32,
              color: '#fff',
              cursor: 'pointer',
            },
            profile: {
              position: 'absolute',
              right: 20,
              color: '#fff',
            },
          };
        // let asyncTester = (
        //     <button onClick={this.props.onTest}>
        //         test now
        //     </button>
        //     <h1>{this.props.count}</h1>
        // );

        let articlePublisher = (
            <div>
                <button onClick={this.props.Log}> Log Current Art List </button>
                <button onClick={this.props.Commit}> Commit Current ArtList to FB </button>
            </div>            
        );

        let articleFetcher = (
            <div>
                <button onClick={this.props.Read}> Read ArtList from FB </button>
            </div>
        );

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
        const dash_base = ( //null
            <section> 
                {signup}
                <br/> 
                {authorizer} 
                <br/> 
            </section>
        );

        // {dash_base}

        //         {articlePublisher}

        //         {articleFetcher}

        //         <Dash />
        //Beginning DomRender
        return (
            <div className="App">
            
            <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to TDC|DE</h1>
                    <LinkContainer  style={styles.link} to="/mydash">
                        <h4>DASHBOARD</h4>
                    </LinkContainer>
                    <LinkContainer style={styles.link} to="/learn">
                        <h4>LEARN</h4>
                    </LinkContainer>
                    <LinkContainer  style={styles.link} to="/participate">
                        <h4>PARTICIPATE</h4>
                    </LinkContainer>
                    <LinkContainer  style={styles.profile} to="/dashboard">
                        <Button> Placeholder Profile </Button>
                    </LinkContainer>
				</header>
                {this.props.children}
                
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
        articles: state.content.articles3p
    };
};

const mapDispactchToProps = dispatch => {
    return{
        //onTest: () => dispatch(reduxTest()),
        onAuth: () => dispatch(acts.fbSignIn()),
        onLogOut: () => dispatch(acts.logout()),
        
        // Actions from Content
        Log: () => dispatch(acts.logArtList()),
        Commit: () => dispatch(acts.writeToFB()),
        Read: () => dispatch(acts.readfromFB())
        //Read: () => dispatch(acts.reader())
    };
};

export default connect( mapStateToProps, mapDispactchToProps )( Layout );
    