import React from 'react';
import LineChart from 'react-chartjs/lib/line';
import Card from '@material-ui/core/Card';
import Pbar from '../ProgressBar';
import LeftContent from '../DashCardLeft';

const styles = ({
    card: {
        minHeight: '30vh',
        position: 'relative',
        margin: '4px',
        boxShadow: '3px 3px 4px #E0E0E0',
    },
    parent :{
        position: 'relative',
        width:'100%',
        margin: 0,
        padding: '4px',
    },
    row: {
        position:'relative',
        minHeight: '28vh',
        minWidth: '100%',
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
        position: 'absolute',
        right: 0,
        minHeight: '100%',
        minWidth: '73%',
    },
    list :{
        listStyleType: 'none',
        padding: '0',
        marginTop: '5%',
        maxHeight:'21vh',
        maxWidth: '100%',
        overflow: 'scroll',
    },
    item: {
        maxWidth: '80%',
        minHeight: '9vh',
        margin: '1.5%',
        paddingLeft: '14px',
        paddingTop: '0px',
        paddingBottom: '0px',
        backgroundColor: '#F0F0F0',
    },
});

const DataCard = (props) => {
    return(
        <div style={styles.parent}>
            {props.children}
            <Card style={styles.card}>
                <div id="categories" styles={styles.row}>
                    <LeftContent header= {props.header} stat={props.stat} footer={props.footer}/>
                    <div style={styles.columnRight}>
                        <div>
                            <ul style={styles.list}>
                            <li><div style={styles.item}>
                                Item 1
                            </div></li>
                            <li><div style={styles.item}>
                                Item 1
                            </div></li>
                            <li><div style={styles.item}>
                                Item 1
                            </div></li>
                            <li><div style={styles.item}>
                                Item 1
                            </div></li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DataCard;