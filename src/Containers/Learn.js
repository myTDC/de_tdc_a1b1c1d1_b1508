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
        //art: {},
        }
    componentDidMount() {
        this.props.readArticlesFB();
    }
    
    /* handleclick(e){
        this.setState({
        art: e.target.dataset.artList
        });
        console.log("Hi", this.state.art);
        this.props.storeArt(this.state.art);
    } */
    render(){
        
        //let artList;
        
        let data = (this.props.articles);
        let articleArray = Object.values(this.props.articles);
        return(
            <div>
            <div className="learnSection"  >
             {articleArray.map(artList =>(
                <ArtCard onclick={(arts) => this.props.storeArt(data[artList.id-1])} key={artList.id} 
                        title={artList.title} 
                        image={artList.image} 
                        url={artList.url} 
                        length={artList.length} 
                        category={artList.category}/>
                ))}
           </div> </div>
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



