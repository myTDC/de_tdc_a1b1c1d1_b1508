import React from 'react';

const styles = ({
    columnLeft: {
        position: 'absolute',
        left: 0,
        paddingTop: '4%',
        textAlign: 'center',
        minHeight: '100%',
        minWidth: '25%',
    },
    num: {
        fontSize: '50pt',
        fontWeight: '600',
        color: '#4e4e4e',
        paddingTop: 0,
        marginBottom: '7px',
        marginTop:0,
        lineHeight: '52pt',
    },
    txt :{
        fontSize: '10pt',
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#4e4e4e',
        //paddingLeft: '25%',
        padding: 0,
        margin:0,
        
    },
});

const DashCardLeft = (props) => {
    return(
        <div style={styles.columnLeft}>
            <h4 style={styles.txt}>{props.header}</h4>
            <h2 style={styles.num}>{props.stat}</h2>
            <h4 style={styles.txt}>{props.footer}</h4>
        </div>
    );
}

export default DashCardLeft;