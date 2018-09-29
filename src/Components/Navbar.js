import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey'
import { LinkContainer } from 'react-router-bootstrap';
import logode from '../tdc-de.svg';
let styles = {
  root: {

    flexGrow: 1,
  },
  colorDefault: {
    maxHeight: 100,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: blueGrey[900],
  },

  text: {
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
    marginLeft: 20,
    color: '#fff',
    cursor: 'pointer',

  },
  profile: {
    position: 'absolute',
    right: 20,
    color: '#fff',
  },
  logo: {
    padding: 0,
    margin: 0,
    height: 55,
  },
  grandad: {
    display: 'flex',
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 8,
    flexWrap: 'wrap',
  },
  linkContainer:{
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
};

const NavBar = (props) => {
  return (
    <div style={styles.root}>
      <AppBar position="static" style={styles.colorDefault}>
        <Toolbar style={styles.grandad}>
          <img style={styles.logo} src={logode} alt="Take Flight with the TDC Logo PaperPlane™" />
          <div style={styles.linkContainer}>
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
          <div style={styles.profileContainer}>
            <LinkContainer style={styles.profile} to="/dashboard">
              <Button> {props.user} </Button>
            </LinkContainer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;