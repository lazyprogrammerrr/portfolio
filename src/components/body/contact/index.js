import React from 'react'
import Seprator from '../../common/seprator';
import SocialIcons from '../../common/socialicons';
import './contact.css';

function Contact() {
    return (
        <div className="contact">
            <Seprator/>
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform!</p>
                    <SocialIcons/>
                </div>
                <div className="download">
                    <a download href={require('../../../assests/AakashResume.pdf').default}><i class="fas fa-cloud-download-alt download-icon"></i>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
