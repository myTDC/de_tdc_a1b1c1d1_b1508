//Libraries
import React from 'react';

//Assets
//import logoDE from '../../tdc-de.svg';

//ProjectComponents
//import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const styles = ({
    dp: {
        height: '85%',
        maxHeight: '5vh',
        minHeight: '5vh',
        width:'5vh',
        borderRadius: '10vh',
        margin: '4%',
        marginRight: '4%',
        //marginLeft: '1vh',
        fontSize: '.5rem',
        // marginLeft: '2vh'
    },
    profiler_container:{
        color: '#FFF8E7',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'flex-end',
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
        <div onClick={props.clicker}>
            <img style={styles.dp} src={props.pic} alt="User's avatar as they set it on gmail or g+" />    
            <div style={styles.profiler_container}>
                <h4 style={styles.profiler_name}>{props.name}</h4>
                <h4 style={styles.profiler_desig}>{props.designation}</h4>
            </div>
        </div>
);

export default userNavCard;