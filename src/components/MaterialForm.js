import React from 'react'

const MaterialForm = ({mat}) => {
    return (
        <div className="mat-wrapper">
            {mat + ":"} 
            <input className="input" type="number" />
            <button className="btn">+</button>
        </div>
    )
}

export default MaterialForm
