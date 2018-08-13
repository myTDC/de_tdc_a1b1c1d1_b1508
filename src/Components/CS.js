import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import ArtCard from './ArtCard';
//import ArtCommit from './ArtCommit'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const styles = ({
  actionBarTop: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    backgroundColor: '#f9f9f9',
    color: '#304FFE',
  },
  actionBarBottom: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    backgroundColor: '#fff',
  },
  left:{
    boxShadow: '0.3px 0.3px 7px #9E9E9E',
    position: 'absolute',
    maxWidth: '24%',
    minHeight: '75.2vh',
    top: '-120px',
    left: '20px',
  },
  form: {
    backgroundColor: '#fff',
    maxHeight: '56.5vh',
    overflow: 'scroll',
  },

  container2: {
    backgroundColor: '#fff',
    boxShadow: '0.3px 0.3px 7px #9E9E9E',
    position: 'absolute',
    minWidth: '24%',
    maxHeight: '75.2vh',
    top: '-120px',
    right: '20px',
    paddingLeft: '5px',
    overflow: 'scroll',
  },

  textField: {
   marginLeft: '12px',
   marginTop: '5px',
   marginBottom: '5px',
   width: 300,
   fontSize: '10pt',
  },

  card: {
    position: 'absolute',
    top: '-70px',
    minWidth: '45%',
    marginLeft: '27.5%',
  },

  cs:{
    position: 'relative',
  },

  button:{
    backgroundColor: '#fff', /* Green */
    border: 'none',
    color: '#304FFE',
    marginLeft: '10px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
  },
  head: {
    backgroundColor: '#fff',
    minWidth: '100%',
    minHeight: '50px',
    margin:'0px',
    padding: '0px',
    boxShadow: '0.3px 0.3px 7px #9E9E9E',
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {main: '#304FFE',
    dark: '#304FFE'},
  },
});

class CS extends Component {
    constructor(props) {
        super(props);
        this.state = {
                title: '',
                url: '',
                image: 'https://www.w3schools.com/w3images/fjords.jpg',
                category: '',
                length: '',
                source:'',
                sourceurl:'',
                sourcelogo:'',
                commitElement: <ArtCard/>};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleCommit(event){
        this.setState({commitElement: React.createElement(ArtCard, {title: this.state.title}, null)});
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
           <div style={styles.cs}>
           <div style={styles.left}>
            <div style={styles.actionBarTop}>
              <Toolbar>
                3rd Party Articles
              </Toolbar>
            </div>
            <div style={styles.form}>
              <MuiThemeProvider theme={theme}>
                <TextField
                id="with-placeholder"
                label="TITLE"
                type="text" name="title"
                value={this.state.title} onChange={this.handleChange}
                placeholder="Article Title goes here"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="ARTICLE URL" name="url"
                value={this.state.url} onChange={this.handleChange}
                type="text" 
                placeholder="Article Link goes here"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="IMAGE URL" name="image"
                value={this.state.image} onChange={this.handleChange}
                type="text" 
                placeholder="Article Preview image URL"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="CATEGORIES" name="category"
                value={this.state.category} onChange={this.handleChange}
                type="text" 
                placeholder="Article #Category goes here"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="LENGTH" name="length"
                value={this.state.length} onChange={this.handleChange}
                type="text" 
                placeholder="Article Length (x Mins) goes here"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="SOURCE" name="source"
                value={this.state.source} onChange={this.handleChange}
                type="text" 
                placeholder="Article 3rd party source here"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="SOURCE URL" name="sourceurl"
                value={this.state.sourceurl} onChange={this.handleChange}
                type="text" 
                placeholder="Article Source Home URL"
                style={styles.textField}
                margin="normal" /> 
                <TextField
                id="with-placeholder"
                label="SOURCE LOGO" name="sourcelogo"
                value={this.state.sourcelogo} onChange={this.handleChange}
                type="text" 
                placeholder="3rd Party source official logo url"
                style={styles.textField}
                margin="normal" /> 
              </MuiThemeProvider>  
            </div>
            <div style={styles.actionBarBottom}>
              <Toolbar>
                <button onClick={(event)=>this.handleCommit(event)} style={styles.button}>Commit</button>
                <button style={styles.button}>Add New</button>
              </Toolbar>
            </div>
           </div>
          <div style={styles.card}> 
            <ArtCard
              title={this.state.title} 
              image={this.state.image} 
              url={this.state.url} 
              length={this.state.length} 
              category={this.state.category}/>
          </div> 
          <div style={styles.container2}>
          {this.state.commitElement}
          </div>
        </div>
        );
    }            
}

export default CS;