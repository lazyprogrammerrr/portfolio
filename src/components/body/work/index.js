import React from 'react'
import { WorkData } from '../../api/work';
import Seprator from '../../common/seprator';
import './work.css';
import WorkCard from './workcard';
function Work() {
    const data = WorkData
    return (
        <div className="work">
            <Seprator/>
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((item)=>{
                    return(
                        <WorkCard item={item} key={item.company}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Work
