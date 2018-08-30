import React from 'react';


const styles = ({
    title : {
        position: 'absolute',
        bottom : '30%',
        left: '-50px',
        transform: 'rotate(-90deg)',
        fontFamily: 'Open Sans, sans serif',
        fontSize: '12px',
        fontWeight: 'bold'
    }
});

const title = (props) => {
    return(
    <div style={styles.title}>{props.name}</div>
);
};

export default title;