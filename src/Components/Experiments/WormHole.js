import React from "react";
import ReactDOM from 'react-dom';

class Wormhole extends React.PureComponent {
    constructor(props) {
        super(props);
        // STEP 1: create a container <div>
        this.containerEl = document.createElement('div');
        this.externalWindow = null;
    }

    mediumLoader(url) {
        console.log("[Components/MedCard] Opening article at: ", url);
        window.location.href = url;
    };


    render() {
        let portal = (
            this.props.children,
            <button onClick={() => this.mediumLoader(this.props.url)}>
                Open Link: Tester
            </button>
        );
        // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
        return ReactDOM.createPortal(portal, this.containerEl);
    }

    componentDidMount() {
        // STEP 3: open a new browser window and store a reference to it
        this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

        // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
        this.externalWindow.document.body.appendChild(this.containerEl);
    }

    componentWillUnmount() {
        // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
        // So we tidy up by closing the window
        this.externalWindow.close();
    }
}

// const mapStateToProps = state => {
//     //count: state.test.count,
//     //No need to access state variables as in the reducer files
//     //Refer to Redux Dev Tools chart to get a better idea of heirarchy post
//     return {
//       userId: state.auth.user.Id,
//       userNameGiven: state.auth.user.GivenName,
//       userNameFamily: state.auth.user.FamilyName,
//       userPic: state.auth.user.PicUrl,
//       userEmail: state.auth.user.Email,
//       userPhone: state.auth.user.PhoneNumber,
//       articles: state.content.articles3p
//     };
//   };

//   const mapDispactchToProps = dispatch => {
//     return {
//       //onTest: () => dispatch(reduxTest()),
//       onAuth: () => dispatch(acts.fbSignIn()),
//       onLogOut: () => dispatch(acts.logout()),

//       // Actions from Content
//       Log: () => dispatch(acts.logArtList()),
//       Commit: () => dispatch(acts.writeToFB()),
//       Read: () => dispatch(acts.readfromFB())
//       //Read: () => dispatch(acts.reader())
//     };
//   };

export default Wormhole;
//   connect(
//     mapStateToProps,
//     mapDispactchToProps
//   )(Layout);