import React from 'react';
import './SignupHero.css';
import logo from '../logo_min.svg';
import logov2 from '../plane_grad.svg';

const SignupHero = (props) =>{
    return(
            <div className='container'>
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
            </div>
    )
}

export default SignupHero;