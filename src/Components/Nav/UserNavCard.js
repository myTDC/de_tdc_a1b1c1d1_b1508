//Libraries
import React from 'react';

//Assets
//import logoDE from '../../tdc-de.svg';

//ProjectComponents
//import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const styles = ({
    container:{
        background: '#2f2f2f',
        elevation: '210',
        color: '#FFF8E7',
        display: 'flex',
        maxWidth: 200,
        width: '20vw',
        minWidth: 160,
        padding: '1vh',
    },
    profiler: {
        display: 'flex',
        flexFlow: 'row-reverse wrap', //flexDirection and flexWrap combined
        height: '5vh',
        maxHeight: '6vh',
        maxWidth: '30%',
        width: '30%',
        color: '#FFF8E7',
        //margin: '0.8vh',
        background: '#042432',
        boxSizing: 'border-box',
        boxShadow: '2px, 1px, 2px, #041620',
        margin: 0,
        marginRight: '1vw',
        borderRadius: 4,
        zIndex: '200', //'1vh',
    },
    dp: {
        height: '85%',
        maxHeight: '5vh',
        minHeight: '5vh',
        //width:'20%',
        borderRadius: '10vh',
        margin: '4%',
        //marginRight: '4%',
        //marginLeft: '1vh',
        fontSize: '.5rem',
        visibility: 'invisible',
        // marginLeft: '2vh'
    },
    profiler_text:{
        color: '#FFF8E7',
        width: '75%',
        // display: 'flex',
        // flexFlow: 'column',
        // alignItems: 'flex-end',
        margin: '4%',
    },
    profiler_name:{
        color: '#FFF8E7',
        fontSize: '1rem',
        lineHeight: 0,
        widthMax: '8vw',
    },
    profiler_desig:{
        color: '#DEDEDE',
        fontSize: '.8rem',
        lineHeight: 0,
        widthMax: '8vw',
    },
})

const userNavCard = props => (
        <div style={styles.container} onClick={props.clicker}>
            <section style={styles.profiler_text}>
                <h4 style={styles.profiler_name}>{props.name}</h4>
                <h4 style={styles.profiler_desig}>{props.designation}</h4>
            </section>
            <img style={styles.dp} src={props.pic} alt="User's avatar as they set it on gmail or g+" />    
        </div>
);

export default userNavCard;