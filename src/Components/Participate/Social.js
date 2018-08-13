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

const themefb = createMuiTheme({
  palette: {
    primary: {main: '#304FFE',
    dark: '#304FFE'},
  },
});

const themeln = createMuiTheme({
    palette: {
      primary: {main: '#0091EA',
      dark: '#0091EA'},
    },
  });

  const themeinsta = createMuiTheme({
    palette: {
      primary: {main: '#6200EA',
      dark: '#6200EA'},
    },
  });
  
class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {
                fb: '',
                ln: '',
                insta: ''};
    
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
              <MuiThemeProvider theme={themefb}>
                <TextField
                id="with-placeholder"
                label="Facebook"
                type="text" name="fb"
                value={this.state.fb} onChange={this.handleChange}
                style={styles.textField}
                margin="normal" /> 
                </MuiThemeProvider>
                <MuiThemeProvider theme={themeln}>
                <TextField
                id="with-placeholder"
                label="LinkedIn" name="ln"
                value={this.state.ln} onChange={this.handleChange}
                type="text" 
                style={styles.textField}
                margin="normal" />
                </MuiThemeProvider>
                <MuiThemeProvider theme={themeinsta}>
                <TextField
                id="with-placeholder"
                label="Instagram" name="insta"
                value={this.state.insta} onChange={this.handleChange}
                type="text" 
                style={styles.textField}
                margin="normal" />
              </MuiThemeProvider>  
           </div>
        );
    }            
}

export default Social;