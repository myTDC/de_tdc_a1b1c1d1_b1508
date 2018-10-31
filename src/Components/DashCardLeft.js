import React from 'react';

const styles = ({
    columnLeft: {
        flexShrink: 1,
        width: '20%',
        height: '100%',
        paddingTop: 50,
    },
    num: {
        // fontSize: '60pt',
        fontWeight: '600',
        color: '#4e4e4e',
        paddingTop: 0,
        marginBottom: '7px',
        marginTop:0,
        lineHeight: '52pt',
        textAlign: 'center',
    },
    txt :{
        fontSize: '1.2vh',
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#4e4e4e',
        //paddingLeft: '25%',
        padding: 0,
        margin:0,
        textAlign: 'center',
        
    },
});

const DashCardLeft = (props) => {
    return(
        <div style={styles.columnLeft}>
            <h4 style={styles.txt}>{props.header}</h4>
            <h2 className={"dashCardLeftStat"} style={styles.num}>{props.stat}</h2>
            <h4 style={styles.txt}>{props.footer}</h4>
        </div>
    );
}

export default DashCardLeft;