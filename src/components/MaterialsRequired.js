import React from 'react'

const MaterialsRequired = ({linen, course, iron, percent, remaining}) => {
    return (
        <div className="req-container">
            <div className="total-container">
                <div className="linen">
                    Linen Used: 
                    <div className="material">{linen}</div>
                </div>
                <div className="course">
                    Course Leather Used: 
                    <div className="material">{course}</div>
                </div>
                <div className="iron">
                    Iron Ingots Used: 
                    <div className="material">{iron}</div>
                </div>
            </div>
            <div className="percent-container">
                <div className="percent">
                    Level Percentage: 
                    <div className="percentage">{percent}%</div>
                </div>
                <div className="next-level">
                    Xp until next level: 
                    <div className="xp-remaining">{remaining}</div>
                </div>
            </div>
        </div>
    )
}

export default MaterialsRequired

