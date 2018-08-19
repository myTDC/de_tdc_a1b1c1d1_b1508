import React from 'react';
import './ToDo.css';
//import Charter from '../Charter';

const ToDo = (props) => {
    //let lister = null;

    return(
        <a href={props.url}>
        <div href={props.url} className="Container">

                <p>{props.myid}</p>    
                <strong>{props.mytitle}</strong>
                <p>{props.added}</p>
                <p>{props.enddate}</p>
                <img src={props.logo} alt="ToDo type icon for the different origins of todo items" />
            
        </div>
        </a>
    );
};

export default ToDo;