import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import blueGrey from '@material-ui/core/colors/blueGrey'
import { LinkContainer } from 'react-router-bootstrap';
import Logode from '../tdc-de.svg';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// let styles = {
//   root: {

//     flexGrow: 1,
//   },
//   colorDefault: {
//     maxHeight: 100,
//     paddingTop: 5,
//     paddingBottom: 5,
//     backgroundColor: blueGrey[900],
//   },

//   text: {
//     marginLeft: "25%",
//     color: blueGrey[300],
//     fontWeight: 700,
//   },

//   flex: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
//   link: {
//     marginLeft: 20,
//     color: '#fff',
//     cursor: 'pointer',

//   },
//   profile: {
//     position: 'absolute',
//     right: 20,
//     color: '#fff',
//   },
//   logo: {
//     padding: 0,
//     margin: 0,
//     height: 55,
//   },
//   grandad: {
//     display: 'flex',
//     height: 200,
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     padding: 8,
//     flexWrap: 'wrap',
//   },
//   linkContainer:{
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
// };
let styles = {
  root: {
    flexGrow: 1,
  },
  appBarColor: {
    backgroundColor: blueGrey[900],
    margin: 0,
    padding: 0,
  },
  myTool: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  appTitle: {
    marginLeft: 15,
  },
  menuButton: {
    width: '25%',
    flex: 1,
    marginLeft: 0,
    marginRight: 20,
  },
  link: {
    marginRight: 20,
    color: '#fff',
    cursor: 'pointer',

  },
  linkContainer: {
    display: 'flex',
    flexGrow: 1,
    width: '75%',
    marginLeft: '12.5%',
    marginTop: 10,
    justifyContent: 'flex-start',
  },
};

class NavBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div style={styles.root}>
        <AppBar style={styles.appBarColor} position="static">
          <Toolbar>
            <section style={styles.myTool}>
              <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                <img height="50" src={Logode} alt="Take Flight with the TDC Logo PaperPlane™" />
                <Typography variant="title" color="inherit" style={styles.appTitle}>TDC</Typography>
              </IconButton>

            <section style={styles.linkContainer}>
              <LinkContainer style={styles.link} to="/learn">
                <h4>Learn</h4>
              </LinkContainer>
              <LinkContainer style={styles.link} to="/dashboard">
                <h4>Dashboard</h4>
              </LinkContainer>
              <LinkContainer style={styles.link} to="/participate">
                <h4>Participate</h4>
              </LinkContainer>
            </section>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
            </section>      
          </Toolbar>
        </AppBar>
        {/* <AppBar position="static" style={styles.colorDefault}>
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
      </AppBar> */}
      </div>
    );
  }
}

export default NavBar;