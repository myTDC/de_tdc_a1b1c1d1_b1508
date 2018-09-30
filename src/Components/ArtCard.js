import React from 'react';
import './ArtCard.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteDisable from '@material-ui/icons/FavoriteBorder';
import Unread from '@material-ui/icons/VisibilityOff';
import red from '@material-ui/core/colors/red'
let styles = {
	colorView: {
	  color: '#263238',
	  marginTop: -10,
	  flexShrink: 1,
	},
	colorFav: {
		color: red[500],
		marginTop: -10,
		flexShrink: 1,
	  },
};
const card = (props) => {

	return (
		<div className="rel" onClick={props.onclick}>
			<a href={props.url} target="_blank">
				<Card>
					<CardMedia className="media"
						image={props.image}
						title={props.title} />
					<div className="grad"> </div>
					<div className="cardContent">
						<h2>{props.title}</h2>
						<h3>{props.length} | #{props.category}</h3>
						<IconButton style={styles.colorFav}>
							<FavoriteDisable />
						</IconButton>
						<IconButton style={styles.colorView}>
							<Unread />
						</IconButton>
					</div>
				</Card>
			</a>
		</div>
	);
};

export default card;