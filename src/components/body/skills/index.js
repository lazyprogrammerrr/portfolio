import React from 'react'
import { SkillsData } from '../../api/skills';
import Seprator from '../../common/seprator';
import SkillCard from './skillcard';
import './skills.css';
function Skills() {
    const data = SkillsData
    return (
        <div className="skills">
            <Seprator/>
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skills-section">
                            <label className="skills-section-title" key={item.list.name}>{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return(
                                        <SkillCard skill={skill}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
