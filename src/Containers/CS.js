import React, { Component } from 'react';
import './CS.css';

//Libraries
import { connect } from 'react-redux';

//Components

//Actions
import * as acts from '../Store/actions';

class CS extends Component {

}
const mapStateToProps = state => {
    return{
        
    };
};

const mapDispactchToProps = dispatch => {
    return{

    };
};

export default connect( mapStateToProps, mapDispactchToProps )( CS );