import React, { Component } from 'react';
import './ArtCard.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

//Libraries
import { connect } from 'react-redux';

//Components

//Actions
import * as acts from '../Store/actions';

class LearnCard extends Component {

    visitHandler = (url) => {
        //window.open(url, "_blank")} FIXME: attempt to use react portal to handle the external links in articles3P.
    };

    render() {
        return (
            <div className="rel" onClick={()=> visitHandler(this.props.url)}>
                    <Card>
                        <CardMedia className="media"
                            image={this.props.image}
                            title={this.props.title}
                        /> <div className="grad"> </div>
                        <div className="cardContent">
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.length} | #{this.props.category}</h3>
                        </div>
                    </Card>
            </div>
        );
    }

}
const mapStateToProps = state => {
    return {

    };
};

const mapDispactchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispactchToProps)(LearnCard);