import React, { Component } from 'react';
import './Authenticate.css';
import TextField from '@material-ui/core/TextField';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const styles = ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '10%',
    marginRight: '25%',
  },
  textField: {
    marginLeft: '25%',
    width: 300,
  },
  menu: {
    width: 200,
  },
});

const gender = [
   
       'Female',
        'Male',
        'Human',
 
  ];

const theme = createMuiTheme({
  palette: {
    primary: {main: '#304FFE',
    dark: '#304FFE'},
  },
});

class Identify extends Component {
    constructor(props) {
        super(props);
        this.state = {
                gender: '',
                age: '',
                location: ''};
    
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
                id="select-gender"
                select
                label="What do you identify yourself as?"
                name="gender"
                style={styles.textField}
                value={this.state.gender}
                onChange={this.handleChange}
                SelectProps={{
                    MenuProps: {
                    style: styles.menu,
                    },
                }}
                margin="normal" >
                {gender.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
                <TextField
                id="with-placeholder"
                label="My age is"
                type="text" name="age"
                value={this.state.age} onChange={this.handleChange}
                placeholder="Honesty Recommended"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="My current coordinates are" name="location"
                value={this.state.location} onChange={this.handleChange}
                type="text" 
                helperText="West/East/North/South/Abroad?"
                style={styles.textField}
                margin="normal" /> 
              </MuiThemeProvider>  
           </div>
        );
    }            
}

export default Identify;