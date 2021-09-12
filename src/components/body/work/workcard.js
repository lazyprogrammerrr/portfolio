import React from 'react'
import './workcard.css';

function WorkCard({item}) {
    return (
        <div className="work-card">
            {/* <img src={item.companyLogo} alt="company-logo" className="work-logo" /> */}
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <label className="work-desg">{item.designation}</label>
                <div className="work-dates">
                    <label>From {item.dateJoining}</label> Till <label>{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
