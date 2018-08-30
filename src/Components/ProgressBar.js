import React, {Component} from 'react';

const styles = ({
    bar : {
        minHeight: '10px',
        maxWidth: 'calc(5%*2)',
        transform: 'rotate(90deg)',
        background: 'linear-gradient(90deg, red, yellow, green)',
    },
});

const ProgressBar = (props) => {
    return(
        <div style = {styles.bar}> 

        </div>    
    );
}

export default ProgressBar;