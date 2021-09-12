import React from 'react'
import './web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                <i class="fas fa-project-diagram option-menu"></i>Projects</a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i class="fas fa-hat-wizard option-menu"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i class="fas fa-briefcase option-menu"></i>Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="far fa-id-card option-menu"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web
