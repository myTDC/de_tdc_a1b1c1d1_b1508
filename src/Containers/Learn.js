import React, { Component } from 'react';
import './Learn.css';

//Libraries
import { connect } from 'react-redux';

//Components
import ArtCard from '../Components/ArtCard';

//Actions
import * as acts from '../Store/actions';

class Learn extends Component {
    state = {

    }
    componentDidMount() {
        this.props.readArticlesFB();
        this.props.ReadUser(this.props.uID);
    }
    readHistory = (uID, id, art) => {
        let found;
        if (this.props.history.hasOwnProperty("b1008" + id))
            found = 1;
        else found = 0;
        this.props.updateHistory(found, uID, id, this.props.history, art);
    }

    render() {
        //let data = Array.from(this.props.articles);
        const data = this.props.articles;
        let articleArray = Object.values(this.props.articles);
        return (
            <div className="learnSection">
                {articleArray.map(artList => (
                    <ArtCard onclick={() => this.readHistory(this.props.uID, artList.id, artList)}
                        key={artList.id}
                        title={artList.title}
                        image={artList.image}
                        url={artList.url}
                        length={artList.length}
                        category={artList.category} />
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        articles: state.content.articles3p,
        history: state.user.history//,
    };
};

const mapDispactchToProps = dispatch => {
    return {
        readArticlesFB: () => dispatch(acts.readfromFB()),
        //storeArt: (arts) => dispatch(acts.setVisited(arts)),
        ReadUser: (uID) => dispatch(acts.readUserHistory(uID)),
        updateHistory: (found, uID, id, art) => dispatch(acts.updateUserReadHistory(found, uID, id, art))//,
    };
};

export default connect(mapStateToProps, mapDispactchToProps)(Learn);



