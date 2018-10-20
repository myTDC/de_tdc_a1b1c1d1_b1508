import React from 'react';
import './SignupHero.css';
//import logo from '../logo_min.svg';
import logov2 from '../plane_grad.svg';
import learn from  '../l-learn.svg';
import domi from '../l-dominate.svg';
import mat from '../l-mature.svg';
import logoDE from '../tdc-de.svg';
import logoTDCWM from '../tdc-logo-wm-long-ondark.svg';

const SignupHero = (props) =>{
    return(
        <div className= "signup">
        <div className="header"> 
        <div className="headerLogo">  
            <img className="w3-image" src={logoDE} alt="Take Flight with the DE Logo PaperPlane™"/>
            <img className="w3-image" src={logoTDCWM} alt="Take Flight with the TDC Logo PaperPlane™"/>
          </div>
        </div>
        <div id="categories" className="row">
        <div className="columnLeft">
          <div className="signupLogo">  
            <img className="w3-image" src={logov2} alt="Take Flight with the TDC Logo PaperPlane™"/>
          </div>
          <div className="contentHero">
            <p className='btn btn-grad' onClick={props.clicked}>  {props.heroAction}  </p>
            <p className='heroBtnHelper'>TO LAUNCH YOUR DREAMS</p>
          </div>
        </div>
        <div className="columnRest">
          <div className="columnRestImage">  
          <img className="w3-image" src={learn} alt="Take Flight with the TDC Logo PaperPlane™"/>
          </div>
          <div className = "contentRest">
          <h2>LEARN</h2>
          <p>Increase your knowledge with content curated to
                    to help build up on your startups dreams</p>
          </div>
        </div>
        <div className="columnRest">
        <div className="columnRestImage">  
          <img className="w3-image" src={mat} alt="Take Flight with the TDC Logo PaperPlane™"/>
          </div>
          <div className = "contentRest">
          <h2>IMPROVE</h2>
          <p>Explore your learning curve to gain every advantage.
                    Improve your game to dominate the market.</p>
          </div>
        </div>
        <div className="columnRest">
        <div className="columnRestImage">  
          <img className="w3-image" src={domi} alt="Take Flight with the TDC Logo PaperPlane™"/>
          </div>
          <div className = "contentRest">
          <h2>TEST</h2>
          <p>Put your skills to the test in an all out nation wide 
                    pitching event at TDC Elevate 18.</p>
          </div>
        </div>
        </div>
        </div>
    )
}

export default SignupHero;

/* <div className='container'>
                <section className='containerFirst'>
                    <img src={logov2} alt="Take Flight with the TDC Logo PaperPlane™"/>
                    <br />
                    <br />
                    <button className='heroButton' onClick={props.clicked}>{props.heroAction}</button>
                    <p className='heroBtnHelper'>TO LAUNCH YOUR DREAMS</p>
                </section>
                <section className='containerRest'>
                    <img src={logo} alt="Take Flight with the TDC Logo PaperPlane™"/>
                    <h3 className='sectionHead'>LEARN</h3>
                    <p className='sectionDescription'>Increase your knowledge with content curated to
                    to help build up on your startups dreams.</p>
                    
                    <p className='sectionDescription'>Development, Designing, Team Building, Legal 
                    Intellectual Property, Team Management and more.</p>
                </section>
                <section className='containerRest'>
                    <img src={logo} alt="Take Flight with the TDC Logo PaperPlane™"/>
                    <h3 className='sectionHead'>IMPROVE</h3>
                    <p className='sectionDescription'>Explore your learning curve to gain every advantage.
                    Improve your game to dominate the market.</p>
                    
                    <p className='sectionDescription'>Learn from your habits and adapt to supercede the 
                    requirements. Use every tool to beat your competition.</p>
                </section>
                <span className='containerRest'>
                    <img src={logo} alt="Take Flight with the TDC Logo PaperPlane™"/>
                    <h3 className='sectionHead'>TEST</h3>
                    <p className='sectionDescription'>Put your skills to the test in an all out nation wide 
                    pitching event at TDC Elevate 18.</p>
                    
                    <p className='sectionDescription'>Learn to control the audience and tease the investors 
                    just enough to get you closer to your dreams</p>
                </span>
            </div> */