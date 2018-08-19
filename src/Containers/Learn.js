import React, { Component } from 'react';
import './Learn.css';

//Libraries
import { connect } from 'react-redux';

//Components
import ArtCard from '../Components/ArtCard';

//Actions
import * as acts from '../Store/actions';

class Learn extends Component{
    state = {
 
    }
    componentDidMount() {
        this.props.readArticlesFB();
    }
    render(){
        //let data = Array.from(this.props.articles);
        let articleArray = Object.values(this.props.articles);
        return(
            <div className="learnSection">
             {articleArray.map(artList =>(
                <ArtCard onClick = {() => this.props.storeArt(artList)} key={artList.id} 
                        title={artList.title} 
                        image={artList.image} 
                        url={artList.url} 
                        length={artList.length} 
                        category={artList.category}/>
                ))}
           </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        articles: state.content.articles3p,
    };
};

const mapDispactchToProps = dispatch => {
    return{
        readArticlesFB: () => dispatch(acts.readfromFB()),
        storeArt: (arts) => dispatch(acts.articleReadProgress(arts)),
    };
};

export default connect( mapStateToProps, mapDispactchToProps )( Learn );



