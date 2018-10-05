//Libraries
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

//Assets
import Logode from '../tdc-de.svg';

//ProjectComponents
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const styles = ({
    blackout :{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.3)',
        zIndex: '100',
    },
})

const navbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
            <LinkContainer style={styles.link} to="/learn">
                <h4>Learn</h4>
            </LinkContainer>
            <LinkContainer style={styles.link} to="/dashboard">
                <h4>Dashboard</h4>
            </LinkContainer>
            <LinkContainer style={styles.link} to="/participate">
                <h4>Participate</h4>
            </LinkContainer>
        </div>
    </nav>
  </header>
);

export default navbar;
