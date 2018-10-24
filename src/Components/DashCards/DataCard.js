import React from 'react';
// import Pbar from '../ProgressBar';
import LeftContent from '../DashCardLeft';

const styles = ({
    parent :{
        position: 'relative',
        width:'100%',
        margin: 0,
        padding: '4px',
    },
    row: {
        display: 'flex',
        width: '100%',
        height: 250,
        overflow: 'hidden',
        alignItems: 'flex-start',
        padding: 0,
        flexWrap: 'wrap',
        backgroundColor: '#FFF8E7',
        boxShadow: '3px 3px 4px #E0E0E0',
    },
    /* progressBar: {
        position: 'absolute',
        bottom: '50px',
        minHeight: '10px',
        width: {width},
        right: '0',
        transform: 'rotate(90deg)',
        background: 'linear-gradient(90deg, red, yellow, green)',
        zIndex: '100',
    }, */
    
    columnRight: {
        flex: 1,
        width: '79%',
        maxHeight: '80%',
        marginTop: 24,
        marginBottom: 24,
        marginLeft: 8,
        overflow: 'scroll',
        padding: 0,
    },
    articleCard: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '3px solid #D0FFE9',
        width: '87%',
        height: '35%',
        padding: 0,
        marginLeft: 20,
        marginBottom: 12,
        marginRight: 4,
        background: '#F9F9F9',
        boxShadow: '1px 1px 3px rgba(0,0,0,16%)'
    },
    Favtitle: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '1.2rem',
        fontWeight: '700',
        color: '#4e4e4e',
        maxWidth: '80%',
        marginTop:10,
        marginBottom:15,
        marginRight:0,
        marginLeft:18,
        padding: 0,
    },

    author: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        color: '#4e4e4e',
        marginLeft: 18,
        marginRight:0,
        marginBottom:15,
        lineHeight: 0.3,
        padding: 0,
    },

    textRight: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '16px',
        fontWeight: '500',
        color: '#4e4e4e',
        maxWidth: '20%',
        marginTop:10,
        marginRight:20,
        padding: 0,
    },
});

const DataCard = (props) => {
    let readArticles = [{},{},{},{},{},{},{},{},{},{}];
    let favArticles =  [{},{},{},{},{},{},{},{},{},{}];
             
    let lister = {};
    if(props.userFavList){
        favArticles = Object.values(props.userFavList);
        console.log('[Comp/DataCard] rendering favs ',favArticles);
        lister = (
            <div style={styles.row}>
                <LeftContent header= {props.header} stat={favArticles.length} footer={props.footer}/>
                <div style={styles.columnRight}>
                    {favArticles.map(favArticles => (
                        <div style={styles.articleCard} key={favArticles.id}>
                            <section>
                                <h4 style={styles.Favtitle}> {favArticles.title|| "Article Title"} </h4>
                                <h4 style={styles.author}>by: {favArticles.author|| "author"}</h4>
                            </section>
                            <section>
                                <h4 style={styles.textRight}> {favArticles.views || "views"}</h4>
                                <h4 style={styles.textRight}> {favArticles.favdate || "favorite date"} </h4> 
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        );
    }else if(props.userReadList) /*if(this.props.children === "user-history")*/{
        readArticles = Object.values(props.userReadList);
        console.log('[Comp/DataCard] rendering hist ',readArticles);
        lister = (
            <div style={styles.row}>
                <LeftContent header= {props.header} stat={readArticles.length} footer={props.footer}/>
                <div style={styles.columnRight}>
                    {readArticles.map(readArticles => (
                        <div style={styles.articleCard} key={readArticles.id}>
                            <section>
                                <h4 style={styles.Favtitle}> {readArticles.title} </h4>
                                <h4 style={styles.author}>by: {readArticles.author}</h4>
                            </section>
                            <section>
                                <h4 style={styles.textRight}> {readArticles.views}</h4>
                                <h4 style={styles.textRight}> {readArticles.favdate} </h4> 
                            </section>
                        </div>
                    ))}
                </div>
            </div>
            
        );
    }
    else{
        lister = (
            <div style={styles.row}>
                <LeftContent header= {props.header} stat={props.stat} footer={props.footer}/>
                <div style={styles.columnRight}>
                        <div style={styles.articleCard}>
                            <section>
                                <h4 style={styles.Favtitle}> No Data Received </h4>
                                <h4 style={styles.author}>user needs to interact with articles to populate fields</h4>
                            </section>
                        </div>
                </div>
            </div>
        );
    }
        
    return(
        <div style={styles.parent}>
            {props.children}
            {lister}
        </div>
    );
};

export default DataCard;


// {userReadHistory.map(uReadHistory => (

//     //TODO: Add the Lister Component
//     onclick={() => this.loadHistory(this.props.userId, uReadHistory.id, uReadHistory)}
//     key={uReadHistory.id}
//     title={uReadHistory.title}
//     url={uReadHistory.url}
//     length={uReadHistory.length}
//     category={uReadHistory.category} 
//     ))}