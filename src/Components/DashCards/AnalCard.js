import React from 'react';
import Card from '@material-ui/core/Card';
import Charter from '../Charter';
//import Pbar from '../ProgressBar';
import LeftContent from '../DashCardLeft';

const styles = ({
    card: {
        minHeight: '30vh',
        position: 'relative',
        margin: '4px',
        boxShadow: '3px 3px 4px #E0E0E0',
    },
    parent: {
        position: 'relative',
        width: '100%',
        margin: 0,
        padding: '4px',
    },
    row: {
        display: 'flex',
        width: '100%',
        height: 250,
        alignItems: 'flex-start',
        padding: 8,
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
        height: '100%',
        marginTop: 24,
        marginLeft: 8,
        overflow: 'scroll',
        padding: 0,
    },
});

const AnalCard = (props) => {
    return (
        <div style={styles.parent}>
        {props.children}
        
            <div style={styles.row}>
            <LeftContent header= {props.header} stat={props.stat} footer={props.footer}/>
                <div style={styles.columnRight}>
                <Charter 
                type={props.chartType} 
                width={props.chartWidth} 
                height={props.chartHeight} 
                chartLabels={props.chartLabels} 
                chartData={props.chartData} 
                chartDataBaseline={props.chartDataBaseline} />
                </div>
            </div>
       
    </div>
    );
};

export default AnalCard;