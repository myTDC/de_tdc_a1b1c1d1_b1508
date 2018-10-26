//Libraries
import React from 'react';

//Assets
//import logoDE from '../../tdc-de.svg';

//ProjectComponents
//import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const userNavCard = props => (
        <div className={'profilerContainer'} onClick={props.clicker}>
            <section className={'profilerText'}>
                <h4 className={'profilerTextName'}>{props.name}</h4>
                <h4 className={'profilerTextDesig'}> {props.designation}</h4>
            </section>
            <img className={'profilerDP'} src={props.pic} alt="User's avatar as they set it on gmail or g+" />    
        </div>
);

export default userNavCard;