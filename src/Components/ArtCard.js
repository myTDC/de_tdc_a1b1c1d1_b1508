import React from 'React';
import './ArtCard.css';

const ArtCard = (props) => {
    
    return(
    <div className="Card">
    <a href={props.url} target="_blank" onClick={props.readArt}>
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

export default ArtCard;