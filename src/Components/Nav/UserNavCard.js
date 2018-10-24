//Libraries
import React from 'react';

//Assets
//import logoDE from '../../tdc-de.svg';

//ProjectComponents
//import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const styles = ({
    container:{
        background: '#162432',
        elevation: '210',
        color: '#FFF8E7',
        display: 'flex',
        maxWidth: 240,
        maxHeight: '72px',
        width: '24vw',
        minWidth: 160,
        alignItems: 'center',
        alignContent: 'space around',
        margin: 0,
        marginRight: '1vw',
        padding: '1vh',
        lineHeight: 0.8,
        borderRadius: 4,
        zIndex: '200',
        boxShadow: '2px, 2px, 4px, rgba(0,0,0, 0.5)',
        cursor: 'pointer',
    },
    dp: {
        height: '88%',
        maxHeight: '5vh',
        minHeight: '40px',
        minWidth: '40px',
        //width:'20%',
        borderRadius: '10vh',
        //margin: '4%',
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
        //margin: '4%',
    },
    profiler_name:{
        color: '#FFF8E7',
        fontSize: '1rem',
        //widthMax: '8vw',
    },
    profiler_desig:{
        color: '#DEDEDE',
        fontSize: '.8rem',
        //widthMax: '8vw',
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