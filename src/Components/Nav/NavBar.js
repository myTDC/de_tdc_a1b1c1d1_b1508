//Libraries
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

//Assets
import logoDE from '../../tdc-de.svg';

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
        justifyContent: 'space-between',
        fontVariant: 'small-caps',
        boxSizing: 'border-box',
        lineHeight: 0,
    },
    linkContainer: {
        display: 'flex',
        width: '75%',
        marginLeft: '12.5%',
        marginTop: 10,
        justifyContent: 'flex-start',
    },
    link: {
        marginRight: '1vw',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '1.3rem',
        fontFamily: "'Roboto', 'Raleway', 'sans-serif'",
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
        zIndex: '200',
        // margin: '1vh',
        // marginLeft: '2vh'
    },
    profiler: {
        display: 'flex',
        maxWidth: '30%', //flexDirection and flexWrap combined

        zIndex: '200', //'1vh',
    },
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
                <h4>learn</h4>
            </LinkContainer>
            <LinkContainer style={styles.link} to="/dashboard">
                <h4>insights</h4>
            </LinkContainer>
            <LinkContainer style={styles.link} to="/participate">
                <h4>events</h4>
            </LinkContainer>
        </div>
        <UserNavCard 
            clicker={props.drawerClickHandlerUser}
            pic={props.uPic}
            name={props.userNameGiven||'Sign In'}
            company={null}
            designation={props.userOrgDesig||'to continue'}
        />
        <button onClick={props.logout}>Logout</button>

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