import React from 'react';
import tdcLogo from '../../imgs/tdc-logo-wm-trans-ondark.svg';
import fbLogo from '../../imgs/fb.svg';
import instaLogo from '../../imgs/insta.svg';
import linkedinLogo from '../../imgs/ln.svg';
import twitterLogo from '../../imgs/tw.svg';


//import * as chartType from '../Charter';
//import Charter from '../Charter';

let styles = {
    row:{
        display: 'flex',
        width: '100%',
        height: '48vh',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        background: '#2D3D54',
        marginTop: 0,
        marginBottom: 20,
        paddingTop: 0,
        zIndex: -100,
    },
    header:{
        width: '100%',
        height: '10%',
        display: 'flex',
        color: '#f9f9f9',
        justifyContent: 'flex-end',
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
        marginLeft: 50,
        marginTop: 10,
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
        overflow: 'hidden',
        background: '#FFF8E709',
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
        width: '5%',
        height: '80%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'center',
        margin: 10,       
    },
    smmFb:{
        width: '20px',
        margin: 10,
    },
    smmIcons:{
        width: '25px',
        margin: 10,
    },
};
const UserCard = (props) => {

    //const uid = props.tdc;
    //let tdc_url= "https://www.mytdc.com/users/"+{uid};
    let userFb = null;
    let userLinkedin = null;
    let userInsta = null;
    let userTwit = null;

    //let user_desig = "Chief Operating Office"; 
    //let user_relation = "is a " + user_desig + " at";
    
    if(props.fb||0){
        userFb = (<a href={props.fb}><img style={styles.smmFb} src={fbLogo} alt="Facebook Logo"/></a>);
    }
    if(props.linked||0){
        userLinkedin = (<a href={props.linked}><img style={styles.smmIcons} src={linkedinLogo} alt="LinkedIn Logo"/></a>);
    }
    if(props.insta||0){
       userInsta = (<a href={props.insta}><img style={styles.smmIcons} src={instaLogo} alt="Instagram Logo"/></a>);
    }
    if(props.twit||0){
        userTwit = (<a href={props.twit}><img style={styles.smmIcons} src={twitterLogo} alt="Twitter Logo"/></a>);
    }

    return(
        <section style={styles.row}>
            <section style={styles.header}> {/*TODO: add the links*/}
                <h4 style={styles.headerText}>BRAG</h4>
                <h4 style={styles.headerText}>EDIT</h4>
                <h4 style={styles.headerText}>LOGOUT</h4>
            </section>

            <section style={styles.logo}>
            <img src={tdcLogo} alt="TDC | DE"/>
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
                    <img width="100%" src={props.pic} alt="Profile"></img>
                </div>
                <div style={styles.profText}>
                <h4 style={styles.profh4}><b>{props.firstName}</b>  {props.lastName}</h4>
                <h4 style={styles.profh4}>{props.post} at {props.company}</h4>
                </div>
            </section>

            <section style={styles.social}>
                {userFb}
                {userLinkedin}
                {userInsta}
                {userTwit}
            </section>
        </section> 
    );
};

export default UserCard;

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