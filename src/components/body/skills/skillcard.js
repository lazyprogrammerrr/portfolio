import React from 'react'
import './skillcard.css'

function SkillCard({skill}) {
    return (
        <div className="skill-card" key={skill.icon}>
            <div className="skill-icon">{skill.icon}</div>
            <label className="skill-name">{skill.name}</label>
        </div>
    )
}

export default SkillCard
