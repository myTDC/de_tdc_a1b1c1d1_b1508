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
        position: 'relative',
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
});

const AnalCard = (props) => {
    return (
        <div style={styles.parent}>
            {props.children}
            <Card style={styles.card}>
                <div id="categories" styles={styles.row}>
                    <LeftContent header={props.header} stat={props.stat} footer={props.footer} />

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
            </Card>
        </div>
    );
};

export default AnalCard;