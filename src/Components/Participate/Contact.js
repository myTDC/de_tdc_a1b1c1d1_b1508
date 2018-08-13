import React, { Component } from 'react';
import './Authenticate.css';
import TextField from '@material-ui/core/TextField';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const styles = ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  textField: {
    marginLeft: '25%',
    width: 300,
  },
  menu: {
    width: 200,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {main: '#304FFE',
    dark: '#304FFE'},
  },
});

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                email: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
    render() {
        return (
            <div style={styles.container}>
              <MuiThemeProvider theme={theme}>
                <TextField
                id="with-placeholder"
                label="Your Disruptor Name is?"
                type="text" name="name"
                value={this.state.name} onChange={this.handleChange}
                placeholder="Feel free to use an alias"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="Any alternate email?" name="email"
                value={this.state.email} onChange={this.handleChange}
                type="text" 
                placeholder="Good for your own forgetfulness"
                style={styles.textField}
                margin="normal" /> 
              </MuiThemeProvider>  
           </div>
        );
    }            
}

export default Contact;