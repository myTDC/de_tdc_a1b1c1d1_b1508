import React, {Component} from 'react';
import './Personal.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Authenticate from './Authenticate';
import Contact from './Contact';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Identify from './Identify';
import Social from './Social';

const theme2 = createMuiTheme({
    palette: {
      primary: {main: '#304FFE'},
    },
  });

function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };
  
  const styles = theme => ({

    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
  });
  

  class participate_personal extends Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    handleChangeIndex = index => {
      this.setState({ value: index });
    };
  
    render() {
      const { theme } = this.props;
  
      return (
       <div className="participate">
        <div className={styles.root}>
          <div>  
          <MuiThemeProvider theme = {theme2}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth>
              <Tab label="Authentication" />
              <Tab label="Contact Info" />
              <Tab label="Identification" />
              <Tab label="Social Presence" />
            </Tabs>
          </AppBar>
          </MuiThemeProvider>
          </div>
          <div className="views">
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}>
            <TabContainer dir={theme.direction}><Authenticate/></TabContainer>
            <TabContainer dir={theme.direction}><Contact/></TabContainer>
            <TabContainer dir={theme.direction}><Identify/></TabContainer>
            <TabContainer dir={theme.direction}><Social/></TabContainer>
          </SwipeableViews>
         </div> 
        </div>
       </div> 
      );
    }
  }
  
  participate_personal.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
/* class participate extends Component{
   
    state = {
        value: 0,
      };
    
    handleChange = (event, value) => {
        this.setState({ value: value,});
        console.log("Tab selected is: ", value);
    };
    
    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render(){
        const { value } = this.state;
        
        return(
            <div className="root">
                <ul id="app">
                    <li onClick={(e) => this.handleChange(e, 0)}>
                        <img height="100vh" src={contact}/>
                        <h2 className="adjust"> Contact </h2>
                    </li>
                    <li onClick={(e) => this.handleChange(e, 1)}>
                        <img height="100vh" src={require('./img/connect.svg')}/>
                        <h2 className="adjust"> Social Connect </h2>
                    </li>
                    <li onClick={(e) => this.handleChange(e, 2)}>&nbsp;&nbsp;
                        <img height="100vh" src={require('./img/elevate.svg')}/>
                        <h2> Elevate </h2>
                    </li>
                </ul>
                <div className="content">
                    {value === 0 && <div><IdCard/></div>}
                    {value === 1 && <div>Item Two</div>}
                    {value === 2 && <div className="height"><Elevate/></div>}
                </div>
            </div>
        );
    }
} */

export default withStyles(styles, { withTheme: true }) (participate_personal);