import React from 'react';
import Charter from '../Charter';

const AnalCard = (props) => {
    return(
        <div className="Card">
            <Charter type={props.charterType} />
        </div>
    );
};

export default AnalCard;