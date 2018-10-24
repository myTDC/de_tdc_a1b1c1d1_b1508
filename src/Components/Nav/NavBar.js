//Libraries
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

//Assets
import logoDE from '../../tdc-de.svg';

import './NavBar.css';

//ProjectComponents
import UserNavCard from './UserNavCard';
//import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const styles = ({
    toolbar: {
        //position: 'fixed',
        width: '100%',
        height: '40px',
        maxHeight: '60px',
        minHeight: '8vh',
        top: 0,
        left: 0,
        background: '#042432',
        boxShadow: '4px, 0px, 4px, #041620',
        display: 'flex',
        alignItems: 'center',
        zIndex: '200',
        justifyContent: 'space-between',
        fontVariant: 'small-caps',
        boxSizing: 'border-box',
        fontFamily: "'Roboto', 'sans-serif'",
        fontWeight: '300',
        //lineHeight: 0,
        position: 'fixed'
    },
    
    linkContainer: {
        display: 'flex',
        width: '75%',
        marginLeft: '12.5%',
        alignContent: 'flex-start',
    },
    link: {
        marginRight: '1vw',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '1.2rem',
        fontFamily: "'Roboto', 'sans-serif'",
        fontWeight: '400',
        //textTransform: 'uppercase',
        //fontVariant: 'small-caps'
    },
    spacer: {
        flexGrow: 1,
    },
    logo: {
        height: '5vh',
        maxHeight: '6vh',
        minHeight: '5vh',
        zIndex: '400',
        cursor: 'pointer',
        // margin: '1vh',
        // marginLeft: '2vh'
    },
    profiler: {
        display: 'flex',
        cursor: 'pointer',
        maxWidth: '30%', //flexDirection and flexWrap combined
        zIndex: '200', //'1vh',
    },
    logger: {
        background: '#042432',
        color: '#FFF',
        fontSize: '1.2rem',
        padding: '4px 8px',
        fontFamily: "'Roboto', 'sans-serif'",
        boxShadow: '2px, 2px, 4px, rgba(0,0,0,.5)',
    }
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
})

const navbar = props => (
    <nav style={styles.toolbar} className="toolbar">
        <div >
            <img className="toolbar__logo" onClick={props.drawerClickHandlerOrg} style={styles.logo} src={logoDE} alt="Take Flight with the TDC Logo PaperPlane™" />
        </div>
        <div style={styles.spacer} className="spacer" />
        <div style={styles.linkContainer} className="toolbar__navigation-items">
            <LinkContainer style={styles.link} to="/learn">
                <h4 className="toolbar__nav-link">learn</h4>
            </LinkContainer>
            <LinkContainer style={styles.link} to="/dashboard">
                <h4 className="toolbar__nav-link">insights</h4>
            </LinkContainer>
            <LinkContainer style={styles.link} to="/events">
                <h4 className="toolbar__nav-link">events</h4>
            </LinkContainer>
        </div>
        <UserNavCard 
            style={styles.profiler}
            clicker={props.drawerClickHandlerUser}
            pic={props.uPic}
            name={props.userNameGiven||'Sign In'}
            company={null}
            designation={props.userOrgDesig||'to continue'}
        />
        <p className="toolbar__nav-link logout" style={styles.logger} onClick={props.logout}>logout</p>

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