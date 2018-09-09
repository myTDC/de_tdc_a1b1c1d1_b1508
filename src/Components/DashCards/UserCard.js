import React from 'react';
import tdcLogo from '../../plane_grad.svg';
import fbLogo from '../../logo.svg';
import instaLogo from '../../logo.svg';
import linkedinLogo from '../../logo.svg';
import twitterLogo from '../../logo.svg';


//import * as chartType from '../Charter';
//import Charter from '../Charter';

const UserCard = (props) => {

    const uid = props.tdc;
    let tdc_url= "https://www.mytdc.com/users/"+{uid};
    let userFb = null;
    let userLinkedin = null;
    let userInsta = null;
    let userTwit = null;

    let user_desig = "Chief Operating Office";
    let user_relation = "is a " + user_desig + " at";
    
    if(props.fb||1){
        userFb = (<a href={props.fb}><img className="smm-icon" src={fbLogo} alt="Facebook Logo"/>FB</a>);
    }
    if(props.linked||1){
        userLinkedin = (<a href={props.linked}><img className="smm-icon" src={linkedinLogo} alt="LinkedIn Logo"/>LinkedIn</a>);
    }
    if(props.insta||1){
       userInsta = (<a href={props.insta}><img className="smm-icon" src={instaLogo} alt="Instagram Logo"/>Insta</a>);
    }
    if(props.twit||1){
        userTwit = (<a href={props.twit}><img className="smm-icon" src={twitterLogo} alt="Twitter Logo"/>Twitter</a>);
    }

    return(
        <div className="userCard">
            <div className="topActs">
                <a href="_blank">BRAG</a>
                <a href="_blank">EDIT</a>
                <a href="_blank">EXIT</a>
            </div>
            <div className="midDisplay">
                <div className="mDuser">
                    <img src={tdcLogo} alt="User's Profile Shot" />
                </div>
                <div className="mDrelation"> <p>{user_relation}</p></div>
                <div className="mDorg">
                    <img src={tdcLogo} alt="Organization's Logo" />
                </div>
            </div>
            <div className="botTags">
                <a href={tdc_url}><img src={tdcLogo} className="smm-icon" alt="TDC Logo"/>TDC</a>
                {userFb}
                {userLinkedin}
                {userInsta}
                {userTwit}
            </div>
        </div>
    );
};

export default UserCard;