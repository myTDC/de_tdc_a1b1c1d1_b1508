import React from 'react';

const styles = ({
    blackout :{
        position: 'fixed',
        width: '100vw',
        height: '100%',
        background: 'rgba(0,0,0,0.3)',
        zIndex: '100',
    },
})

const blackout = props => (
    <div style={styles.blackout} className="blackout" onClick={props.click} />
);

export default blackout;