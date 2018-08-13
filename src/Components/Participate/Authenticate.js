import React, { Component } from 'react';
import './Authenticate.css';
import TextField from '@material-ui/core/TextField';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const styles = ({
  button: {
    margin: '3px',
    backgroundColor: '#00E676',
  },
  input: {
    display: 'none',
  },
  container: {
    display:'block',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  textField: {
    width: 300,
  },
  menu: {
    width: 200,
  },
  bu: {
    textAlign: 'center',
    display:'block',
    marginTop: '15px',
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {main: '#304FFE',
    dark: '#304FFE'},
  },
});

class Authenticate extends Component {
    constructor(props) {
        super(props);
        this.state = {
                email: '',
                number: ''};
    
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
                label="Where do we drop you emails?"
                type="text" name="email"
                value={this.state.email} onChange={this.handleChange}
                placeholder="Email ID"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="Your Phone" name="number"
                value={this.state.number} onChange={this.handleChange}
                type="text" 
                placeholder="Valid mobile number please"
                style={styles.textField}
                margin="normal" /> 
              </MuiThemeProvider>  
              <div style={styles.bu}>
              <Button variant="contained" style={styles.button}>
                Submit
              </Button>
              </div>
           </div>
        );
    }            
}

export default Authenticate;