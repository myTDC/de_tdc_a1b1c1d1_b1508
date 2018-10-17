import React, { Component } from "react";
import "./Layout.css";
//import logo from "../plane_grad.svg";

//Libraries
import { connect } from "react-redux";

//Containers
//import Dash from "./Dashboard";

//Components
import SignUpHero from "../Components/SignupHero";
import Navbar from "../Components/Nav/NavBar";
import Drawer from "../Components/Nav/Drawer";
import Blackout from "../Components/Nav/Blackout";
//import OldNavbar from "../Components/Navbar";

//Actions
import * as acts from "../Store/actions";
import { instanceOf } from "prop-types";
 
class Layout extends Component {
  state = {
    //sideDrawerOpen: false,
    drawerUser_open: false,
    drawerOrg_open: false
  };

  componentDidMount(){
    this.props.ReadUser(this.props.userId);
  };

  //################################ Methods for Navigation/Side Drawers ################################
  drawerToggleClickHandlerUser = () => {
    this.setState((prevState) => {
      return {drawerUser_open: !prevState.drawerUser_open};
    });
  };
  drawerToggleClickHandlerOrg = () => {
    this.setState((prevState) => {
      return {drawerOrg_open: !prevState.drawerOrg_open};
    });
  };

  backdropClickHandler = () => {
    this.setState({drawerUser_open: false, drawerOrg_open: false});
  };
  //################################ End of methods for Navigation/Side Drawers ################################

  render(){
    let blackout;

    if (this.state.drawerOrg_open || this.state.drawerUser_open) {
      blackout = <Blackout click={this.backdropClickHandler} />
    }

    //let authorizer = <button onClick={this.props.onAuth}>Login</button>;

    let signup = (
      <SignUpHero clicked={this.props.onAuth} heroAction="Lift Off" />
    );

    let header = null;

    if (this.props.userId) {
      signup = null;
      header = (
        <header className="App-header">
          <Navbar 
            drawerClickHandlerUser={this.drawerToggleClickHandlerUser}
            drawerClickHandlerOrg={this.drawerToggleClickHandlerOrg}
            userNameGiven={this.props.userNameGiven}
            userOrgDesig={this.props.userNameFamily}
            uPic={this.props.userPic} />
        </header>
      );
      // authorizer = (
      //   <section>
      // {/*<button onClick={this.props.onLogOut}>Logout</button>*/}

      //     {/* <h2>{this.props.userNameGiven}</h2>
      //                   <h3>{this.props.userNameFamily}</h3>
      //                   <img src={this.props.userPic} alt="Users DP" />
      //                   <h4>{this.props.userEmail}</h4>
      //                   <h4>{this.props.userPhone}</h4> */}
      //   </section>
      // );
    }
    const dash_base = (
      <section>
        <Drawer 
          drawerUser={this.state.drawerUser_open} 
          drawerOrg={this.state.drawerOrg_open}
          //dataList={}
          />
        {blackout}  
        {signup}
        <br />
        {/*authorizer*/}
        <br />
      </section>
    );
    //Beginning DomRender
    return (
      <div className="App">
        <div className="scroll">
          {header}
          <div className="logout">{dash_base}</div>
        </div>

        {/*   {articlePublisher}

                {articleFetcher} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  //count: state.test.count,
  //No need to access state variables as in the reducer files
  //Refer to Redux Dev Tools chart to get a better idea of heirarchy post
  return {
    userId: state.auth.user.Id,
    userNameGiven: state.auth.user.GivenName,
    userNameFamily: state.auth.user.FamilyName,
    userPic: state.auth.user.PicUrl,
    userEmail: state.auth.user.Email,
    userPhone: state.auth.user.PhoneNumber,
    articles: state.content.articles3p,
    userHistory: state.user.history,
  };
};

const mapDispactchToProps = dispatch => {
  return {
    //onTest: () => dispatch(reduxTest()),
    onAuth: () => dispatch(acts.fbSignIn()),
    onLogOut: () => dispatch(acts.logout()),

    ReadUser: (uID) => dispatch(acts.readUserHistory(uID)),
    
    // Actions from Content
    Log: () => dispatch(acts.logArtList()),
    Commit: () => dispatch(acts.writeToFB()),
    Read: () => dispatch(acts.readfromFB())
    //Read: () => dispatch(acts.reader())
  };
};

export default connect(mapStateToProps,mapDispactchToProps)(Layout);

// let asyncTester = (
//     <button onClick={this.props.onTest}>
//         test now
//     </button>
//     <h1>{this.props.count}</h1>
// );

// let articlePublisher = (
//   <div>
//     <button onClick={this.props.Log}> Log Current Art List </button>
//     <button onClick={this.props.Commit}>
//       {" "}
//       Commit Current ArtList to FB{" "}
//     </button>
//   </div>
// );

// let articleFetcher = (
//   <div>
//     <button onClick={this.props.Read}> Read ArtList from FB </button>
//   </div>
// );