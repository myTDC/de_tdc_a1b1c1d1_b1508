//Libraries
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

//Assets
import logoDE from /*'../../imgs/tdc-logo-wm-long-ondark.svg';*/'../../imgs/tdc-de.svg';

import './NavBar.css';

//ProjectComponents
import UserNavCard from './UserNavCard';

const styles = ({
    toolbar: {
        //position: 'fixed',
        // width: '100%',
        // height: '40px',
        // maxHeight: '60px',
        // minHeight: '8vh',
        // top: 0,
        // left: 0,
        // background: '#042432',
        // boxShadow: '4px, 0px, 4px, #041620',
        // display: 'flex',
        // alignItems: 'center',
        // zIndex: '200',
        // alignContent: 'stretch',
        // justifyContent: 'space-between',
        // fontVariant: 'small-caps',
        // fontFamily: "'Roboto', 'sans-serif'",
        // fontWeight: '300',
        // //lineHeight: 0,
        // position: 'fixed'
    },
    
    // linkContainer: {
    //     // display: 'flex',
    //     // flexGrow: 1,
    //     // flexShrink: 1,
    //     // //width: '75%',
    //     // margin: '0vw 4vw',
    //     // alignItems: 'flex-end',
    // },
    // link: {
    //     //marginRight: '1vw',
    //     // cursor: 'pointer',
    //     // fontFamily: "'Roboto', 'sans-serif'",
    //     // fontWeight: '400',
    //     //textTransform: 'uppercase',
    //     //fontVariant: 'small-caps'
    // },
    // logo: {
    //     // height: '5vh',
    //     // maxHeight: '6vh',
    //     // minHeight: '5vh',
    //     // zIndex: '400',
    //     // cursor: 'pointer',
    //     // // margin: '1vh',
    //     // // marginLeft: '2vh'
    // },
    // profiler: {
    //     // cursor: 'pointer',
    //     // maxWidth: '30%', //flexDirection and flexWrap combined
    //     // zIndex: '200', //'1vh',
    // },
    // logger: {
        
    // }
});

const navbar = props => (
    <nav style={styles.toolbar} className="toolbar">

        <img className="toolbar__logo" onClick={props.drawerClickHandlerOrg} style={styles.logo} src={logoDE} alt="Take Flight with the TDC Logo PaperPlane™" />

        <div className="toolbar__navigation-items">
            <LinkContainer className="toolbar__nav-link-container" to="/learn">
                <h4 className="toolbar__nav-link">learn</h4>
            </LinkContainer>
            <LinkContainer className="toolbar__nav-link-container" to="/dashboard">
                <h4 className="toolbar__nav-link">insights</h4>
            </LinkContainer>
        </div>

        <UserNavCard 
            className = "userNavCard"
            clicker={props.drawerClickHandlerUser}
            pic={props.uPic}
            name={props.userNameGiven||'Sign In'}
            company={null}
            designation={props.userOrgDesig||'to continue'}
        />
        
        <LinkContainer to="/">
            <p className="toolbar__nav-link logout" onClick={props.logout} > logout</p>
        </LinkContainer>

    </nav>
);

export default navbar;

// <div className="toolbar__toggle-button"> </div>

// <div style={styles.profiler} className="toolbar__profiler">
// <UserNavCard
//     clicker={props.drawerClickHandlerUser}
//     pic={props.uPic}
//     name={props.userNameGiven||'Sign In'}
//     company={null}
//     designation={props.userOrgDesig||'to continue'}
// />
// </div>

// <LinkContainer style={styles.link} to="/events">
// <h4 className="toolbar__nav-link">events</h4>
// </LinkContainer>

    // profiler: {
    //     display: 'flex',
    //     flexFlow: 'row-reverse wrap', //flexDirection and flexWrap combined
    //     height: '5vh',
    //     maxHeight: '6vh',
    //     maxWidth: '30%',
    //     width: '30%',
    //     color: '#FFF8E7',
    //     //margin: '0.8vh',
    //     background: '#042432',
    //     boxSizing: 'border-box',
    //     boxShadow: '2px, 1px, 2px, #041620',
    //     margin: 0,
    //     marginRight: '1vw',
    //     borderRadius: 4,
    //     zIndex: '200', //'1vh',
    // },
    // profiler_container:{
    //     color: '#FFF8E7',
    //     display: 'flex',
    //     flexFlow: 'column',
    //     alignItems: 'flex-end',
    //     margin: '4%',
    //     zIndex: '120',
    // },
    // profiler_name:{
    //     color: '#FFF8E7',
    //     fontSize: '1rem',
    //     lineHeight: 0,
    //     widthMax: '8vw',
        
    // },
    // profiler_desig:{
    //     color: '#DEDEDE',
    //     fontSize: '.8rem',
    //     lineHeight: 0,
    //     widthMax: '8vw',
    // },
    // dp: {
    //     height: '84%',
    //     maxHeight: '92%',
    //     minHeight: '80%',
    //     borderRadius: '10vh',
    //     margin: '4%',
    //     marginRight: '4%',
    //     //marginLeft: '1vh',
    //     fontSize: '.5rem',
    //     zIndex: '120',
    //     // marginLeft: '2vh'
    // },


    // <div style={styles.spacer} className="spacer" />