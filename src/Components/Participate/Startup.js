import React, {Component} from 'react';
import './Startup.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
  
  class participate_startup extends Component {
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
       <div className="startup">
        <div className={styles.root}>
          <div>  
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth>
              <Tab label="Registration" />
              <Tab label="Product" />
              <Tab label="Identification" />
              <Tab label="Market" />
            </Tabs>
          </AppBar>
          </div>
          <div className="views">
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}>
            <TabContainer dir={theme.direction}>Item One</TabContainer>
            <TabContainer dir={theme.direction}>Item Two</TabContainer>
            <TabContainer dir={theme.direction}>Item Three</TabContainer>
            <TabContainer dir={theme.direction}>Item Four</TabContainer>
          </SwipeableViews>
         </div> 
        </div>
       </div> 
      );
    }
  }
  
  participate_startup.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true }) (participate_startup);