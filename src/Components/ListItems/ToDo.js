import React from 'react';
import './ToDo.css';
//import Charter from '../Charter';

const ToDo = (props) => {
    //let lister = null;

    return(
        <div className="Container">
            <a href={props.url}>
                <em>{props.id}</em>    
                <strong>{props.title}</strong>
                <sup>{props.added}</sup>
                <mark>{props.enddate}</mark>
                <img src={props.logo} />
            </a>
        </div>
    );
};

export default ToDo;