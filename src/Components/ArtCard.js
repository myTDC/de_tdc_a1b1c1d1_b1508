import React from 'react';
import './ArtCard.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteDisable from '@material-ui/icons/FavoriteBorder';
import FavoriteEnable from '@material-ui/icons/FavoriteOutlined';
import Unread from '@material-ui/icons/VisibilityOff';
import Read from '@material-ui/icons/Visibility';
import red from '@material-ui/core/colors/red'
let styles = {
	colorView: {
		color: '#263238',
	},
	colorFav: {
		color: red[500],
	},
};

// const Greeting =(Fav) => {
// 	if (!Fav) {
// 	  return <FavoriteDisable />;
// 	}
// 	return <FavoriteEnable/>;
//   }
const card = (props) => {
	 let fav = props.isFav;
	 let read = props.isRead;
	return (
		<div className="rel">

			<Card>
				<CardMedia className="media"
					image={props.image}
					title={props.title} />

				<a href={props.url} target="_blank" rel="noopener noreferrer">
					<div onClick={props.onclick} className="grad"> </div></a>

				<section className="cardContent">
					<a className="conttext" href={props.url} target="_blank" rel="noopener noreferrer">
						<div className="cont" onClick={props.onclick}>
							<h2 className="conttitle">{props.title}</h2>
							<h3>{props.length} | #{props.category}</h3>
						</div>
					</a>

					<div className="icons">
						<IconButton onClick={props.favHandle} style={styles.colorFav}>
							{fav ? <FavoriteEnable/> : <FavoriteDisable/>}
						</IconButton>
						<IconButton style={styles.colorView}>
							{read ? <Read/> : <Unread/>}
						</IconButton>
					</div>
				</section>
			</Card>
		</div>
	);
};

export default card;