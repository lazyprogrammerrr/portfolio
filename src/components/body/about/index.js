import React from 'react'
import SocialIcons from '../../common/socialicons'
import './about.css'
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋, I am
                    <br /><span className="info-name">Aakash Sharma</span>.
                    <br /> I <span id="love-key">love </span>experimenting with the web.
                    <br /> and creating new <div className="web-img"><img src={require('../../../assests/spider-web.png').default} alt="web-png"/>SITES</div>
                </div>
                <div className="about-photo">
                    <img src={require("../../../assests/Programming.gif").default} alt="my-pic" className="my-pic" />
                </div>
            </div>
            <SocialIcons/>
        </div>
    )
}

export default About
