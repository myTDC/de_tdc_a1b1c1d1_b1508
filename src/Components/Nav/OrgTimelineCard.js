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
        fontSize: '22px',
        fontWeight: '700',
        color: '#4e4e4e',
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
        marginTop:10,
        marginRight:20,
        padding: 0,
    },
});

const DataCard = (props) => {
    return(
        <div style={styles.parent}>
            {props.children}
            <div style={styles.row}>
                <LeftContent header= {props.header} stat={props.stat} footer={props.footer}/>
                    <div style={styles.columnRight}>
                        <div style={styles.articleCard}>
                            <section>
                                <h4 style={styles.Favtitle}>Article Title </h4>
                                <h4 style={styles.author}>by: author</h4>
                            </section>
                            <section>
                                <h4 style={styles.textRight}> views </h4>
                                <h4 style={styles.textRight}> favorite date </h4> 
                            </section>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default DataCard;