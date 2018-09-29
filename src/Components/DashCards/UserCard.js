import React from 'react';
import tdcLogo from '../../plane_grad.svg';
import fbLogo from '../../logo.svg';
import instaLogo from '../../logo.svg';
import linkedinLogo from '../../logo.svg';
import twitterLogo from '../../logo.svg';


import * as chartType from '../Charter';
import Charter from '../Charter';

let styles = {
    row:{
        display: 'flex',
        width: '100%',
        height: 300,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        background: '#2D3D54'
    },
    header:{
        width: '100%',
        height: '10%',
        display: 'flex',
        color: '#f9f9f9',
        justifyContent: 'flex-end',
        borderBottom: '1.5px solid #f9f9f9'
    },
    headerText:{
        padding:0,
        marginTop: 0,
        marginRight: 12,
        fontSize: '12pt',
    },
    logo:{
        width: 120,
        height: '80%',
        margin: 10,
        color: '#f9f9f9',
    },
    ack: {
        flex: 1,
        width: '40%',
        height: '80%',
        flexShrink: 0,
        margin: 10,
    },
    ackText:{
        width: '100%',
        height: 100,
        textAlign: 'center',
        color: '#f9f9f9',
        margin: 10,      
    },
    ackh4:{
        fontFamily: 'Raleway, sans-serif',
        fontSize: '22px',
        fontWeight: '300',
    },
    prof: {
        width: '25%',
        height: '80%',
        margin: 10,
        boxShadow: '1px 1px 4px rgba(0,0,0,30%)',       
    },
    profPic: {
        width: '100%',
        height: '75%',
    },
    profText: {
        marginTop: 12,
        textAlign: 'center',
        lineHeight: 0.75,
        padding: 0,   
        color: 'white',
    },
    profh4:{
        fontFamily: 'Raleway, sans-serif',
        fontWeight: '500',
        fontSize: '12pt',
    },
    social: {
        width: '10%',
        height: '80%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'center',
        margin: 10,       
    },
};
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
        <section style={styles.row}>
            
            <section style={styles.header}> {/*TODO: add the links*/}
                <h4 style={styles.headerText}>BRAG</h4>
                <h4 style={styles.headerText}>EDIT</h4>
                <h4 style={styles.headerText}>LOGOUT</h4>
            </section>

            <section style={styles.logo}>
            <img src={tdcLogo}/> {/*TODO: correct the logo*/}
            <h4><b>&nbsp;&nbsp;TDC | DE</b></h4>
            </section>

            <section style={styles.ack}>
                <div style={styles.ackText}>
                    <h4 style={styles.ackh4}>TDC Recognizes <br/>
                    {props.nameTitle} {props.firstName} {props.lastName}<br/>
                    as a <br/>
                    <b><i>"Disruptor In Making"</i></b></h4>
                </div>
            </section>

            <section style={styles.prof}>
                <div style={styles.profPic}>

                </div>
                <div style={styles.profText}>
                <h4 style={styles.profh4}><b>{props.firstName}</b>  {props.lastName}</h4>
                <h4 style={styles.profh4}>{props.post} at {props.company}</h4>
                </div>
            </section>

            <section style={styles.social}> {/*TODO: align the logos*/}
                {userFb}
                {userLinkedin}
                {userInsta}
            </section>
        </section> 
/*         <div className="userCard">
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
        </div> */
    );
};

export default UserCard;