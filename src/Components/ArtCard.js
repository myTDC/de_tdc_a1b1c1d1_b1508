import React from 'react';
import './ArtCard.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
  
const card = (props) => {
    
    return(
    <div className="rel" onClick = {props.onclick}>
    <a href={props.url} target="_blank">
      <Card>
        <CardMedia className="media"
          image={props.image}
          title={props.title}
        /> <div className="grad"> </div>
        <div className="cardContent"> 
            <h2>{props.title}</h2>
            <h3>{props.length} | #{props.category}</h3>
        </div>
      </Card>
    </a>    
    </div>
    );
};

export default card;