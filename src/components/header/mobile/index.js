import React from 'react'
import './mobile.css'
function Mobile({isOpen,setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close" onClick={()=>setIsOpen(!isOpen)}>
            <i class="fas fa-times"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#projects">
                <i class="fas fa-project-diagram option-menu"></i>Projects</a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <i class="fas fa-hat-wizard option-menu"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                <i class="fas fa-briefcase option-menu"></i>Work
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <i class="far fa-id-card option-menu"></i>Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
