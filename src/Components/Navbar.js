import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey'
import { LinkContainer } from 'react-router-bootstrap';

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
      marginLeft: 20,
      color: '#fff',
      cursor: 'pointer',
    },
    profile: {
      position: 'absolute',
      right: 20,
      color: '#fff',
    },
  };
  
  const NavBar = (props) => {
    return (
      <div style={styles.root}>
        <AppBar position="static" style={styles.colorDefault}>
          <Toolbar variant="dense">
            <div style={styles.text}> TDC | DestinyEngine </div>
            <LinkContainer style={styles.link} to="/learn">
              <h4>Learn</h4>
            </LinkContainer>
            <LinkContainer  style={styles.link} to="/dashboard">
              <h4>Dashboard</h4>
            </LinkContainer>
            <LinkContainer  style={styles.link} to="/participate">
              <h4>Participate</h4>
            </LinkContainer>
            <LinkContainer  style={styles.profile} to="/dashboard">
              <Button> {props.user} </Button>
            </LinkContainer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default NavBar;