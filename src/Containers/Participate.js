import React, { Component } from 'react';
import './Participate.css';

//Libraries
import { connect } from 'react-redux';

//Components

//Actions
import * as acts from '../Store/actions';

class Participate extends Component {
    render(){
        return(
            <div className="participate">
             <h1> Enter you participation info here </h1>
           </div>
        );
    }
}
const mapStateToProps = state => {
    return{

    };
};

const mapDispactchToProps = dispatch => {
    return{
        readArticlesFB: () => dispatch(acts.readfromFB()),
    };
};

export default connect( mapStateToProps, mapDispactchToProps )( Participate );