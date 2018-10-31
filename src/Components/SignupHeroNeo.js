import React from 'react';
import './SignupHeroNeo.css';
//import logo from '../logo_min.svg';
import learn from  '../imgs/l-learn.svg';
import domi from '../imgs/l-dominate.svg';
import mat from '../imgs/l-mature.svg';
// import logoDE from '../imgs/tdc-de.svg';
import logoTDCEdu from '../imgs/tdc-logo-wm-ondark.svg';
import logoTDCWM from '../imgs/tdc-logo-wm-long-ondark.svg';
import signupButton from '../imgs/tdc-hero-signup-button.svg';

const SignupHero = (props) =>{
    return(
        <div className={"landingContainer"}>
            <div className={"landingSection"}>
                <img className={"landingSectionImage"} src={logoTDCEdu} alt="Take Flight with the TDC Logo PaperPlane™"/>
                <div className={"landingSectionTextContainer"}>
                    <h4 className={"landingSectionHeroTitle"}> TDC Educate </h4>
                    <p className={"landingSectionHeroDescription"}> is the quickest way to increase the odds of your startup success. </p>
                    <section className={"landingSectionHeroButtonContainer"}>
                        <div className={"landingSectionHeroButton"} onClick={props.clicked}>
                            <p className={"landingSectionHeroButtonText"} onClick={props.clicked}>Signup with gmail</p>
                        </div>
                        <p className={"landingSectionHeroButtonHelper"}> (to launch your dreams) </p>
                    </section>
                </div>
            </div>
            <div className={"landingSectionRev"}>
                <img className={"landingSectionImage"} src={learn} alt="Take Flight with the TDC Logo PaperPlane™"/>
                <div className={"landingSectionTextContainer"}>
                    <h1 className={"landingSectionTextTitle"}> Learn. </h1>
                    <p className={"landingSectionTextQuote"}>"Gaining knowledge is how we prepare ourselves to face the most challenging moments."</p>
                    <p className={"landingSectionTextDescription"}>Increase your knowledge with content curated to
                    to help build up on your startups dreams.</p>
                </div>
            </div>
            <div className={"landingSection"}>
                <img className={"landingSectionImage"} src={mat} alt="Take Flight with the TDC Logo PaperPlane™"/>
                <div className={"landingSectionTextContainer"}>
                    <h1 className={"landingSectionTextTitle"}> Improve. </h1>
                    <p className={"landingSectionTextQuote"}>"Knowledge is power. Knowing your strengths and weaknesses make you incredibly powerful."</p>
                    <p className={"landingSectionTextDescription"}>Explore your learning curve to gain every advantage.
                    Improve your game to dominate the market.</p>
                </div>
            </div>
            <div className={"landingSectionRev"}>
                <img className={"landingSectionImage"} src={domi} alt="Take Flight with the TDC Logo PaperPlane™"/>
                <div className={"landingSectionTextContainer"}>
                    <h1 className={"landingSectionTextTitle"}> Test. </h1>
                    <p className={"landingSectionTextQuote"}> "Preparation to face the challenge is not worth much until you dare to face it head-on."</p>
                    <p className={"landingSectionTextDescription"}>Put your skills to the test in an all out nation wide 
                    pitching event at TDC Elevate.</p>
                </div>
            </div>
            <div className={"appBar container"}>
                <img className={"appBar logo"} src={logoTDCWM} alt="Take Flight with the TDC Logo PaperPlane™"/>
                <p className={"appBar description"}> Are you ready to take on the challenge? </p>
                <img className={"appBar button"} onClick={props.clicked} src={signupButton} alt="Signup using gMail to Take flight with TDC™"/>
            </div>
        </div>
    );
};

export default SignupHero;

// <div className={"appBar button"} onClick={props.clicked}>
//     <p className={"appBar buttonText"} onClick={props.clicked}>Signup with gmail</p>
// </div>

// <img className={"appBar button"} onClick={props.clicked} src={signupButton} alt="Signup using gMail to Take flight with TDC™"/>