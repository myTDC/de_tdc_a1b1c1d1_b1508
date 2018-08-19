import React from 'react';
import LineChart from 'react-chartjs/lib/line';
import Card from '@material-ui/core/Card';

const styles = ({
    card: {
        minHeight: '30vh',
        position: 'relative',
        margin: '4px',
        boxShadow: '3px 3px 7px #E0E0E0',
    },
    parent :{
        position: 'relative',
    }
});

const DataCard = (props) => {
    return(
        <div style={styles.parent}>
            {props.children}
            <Card style={styles.card}>
            </Card>
        </div>
    );
};

export default DataCard;
/* import React from 'react';
import LineChart from 'react-chartjs/lib/line';

const DataCard = (props) => {

    let lister = null;

    

    return(
    <div className="Card">
        {lister}
    </div>
    );
};

export default DataCard; */