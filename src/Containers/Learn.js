import React, { Component } from 'react';
import './Learn.css';

//Libraries
import { connect } from 'react-redux';

//Components
import ArtCard from '../Components/ArtCard';

//Actions
import * as acts from '../Store/actions';

class Learn extends Component {
    componentDidMount() {
        this.props.readArticlesFB();
        this.props.fetchFavorites(this.props.uID, this.props.articles);
        console.log('ArtList is: ',this.props.articles);
        //this.favTable(this.props.uID, this.props.articles);
        //this.props.ReadUser(this.props.uID);
    }

    componentWillUnmount() {
        this.props.updateFavorites(this.props.uID, this.props.favList);
    }
    readHistory = (uID, id, art) => {
        console.log('[Container/Learn] User Read Article:', id);
        let found;
        if (this.props.history.hasOwnProperty("b1008_" + id)) //Checks if the object has the specified value as it's own property or is an inherited property.
            found = true;
        else found = false;
        this.props.updateHistory(found, uID, id, this.props.history, art);
        this.forceUpdate();
    }

    handleFavorite = (id, list) => {
        if(list.includes(id)){
            let index = list.indexOf(id);
            list = list.splice(index,1);}
        else list.push(id);
        this.forceUpdate();
    }

    returnFav = (id, list) => {
        if(list.includes(id))
            return 1
        else
            return 0
    }

    returnRead = (id) => {
        if(this.props.history.hasOwnProperty("b1008_" + id))
            return 1
        else 
            return 0
    }

    render() {
        let articleArray = Object.values(this.props.articles);
        return (
            <div className="learnSection">
                {articleArray.map(artList => (
                    <ArtCard onclick={() =>
                        //onclick={(arts) => this.props.storeArt(data[artList.id-1])} key={artList.id} 
                        this.readHistory(this.props.uID, artList.id, artList)}
                        key={artList.id}
                        title={artList.title}
                        image={artList.image}
                        url={artList.url}
                        length={artList.length}
                        category={artList.category}
                        isRead={this.returnRead(artList.id)}
                        isFav={this.returnFav(artList.id, this.props.favList)}
                        favHandle={() => this.handleFavorite(artList.id, this.props.favList)}
                    />
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        articles: state.content.articles3p,
        history: state.user.history,
        favList: state.user.favList,
        uID: state.auth.user.Id,
    };
};

const mapDispactchToProps = dispatch => {
    return {
        readArticlesFB: () => dispatch(acts.readfromFB()),
        fetchFavorites: (uID, artList) => dispatch(acts.fetchFavorite(uID, artList)),
        updateFavorites: (uID, list) => dispatch(acts.writeFavList(uID, list)),
        //storeArt: (arts) => dispatch(acts.setVisited(arts)),
        //ReadUser: (uID) => dispatch(acts.readUserHistory(uID)),
        updateHistory: (found, uID, id, art) => dispatch(acts.updateUserReadHistory(found, uID, id, art))//,
    };
};

export default connect(mapStateToProps, mapDispactchToProps)(Learn);



