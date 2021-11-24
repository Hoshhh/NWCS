import React from 'react'
import MaterialForm from './MaterialForm'

const AddMaterials = ({playerInfo}) => {
    return (
        <div className="mat-container">
            <MaterialForm playerInfo={playerInfo} />
        </div>
    )
}

export default AddMaterials
