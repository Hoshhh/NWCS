import React from 'react'
import MaterialForm from './MaterialForm'

const AddMaterials = ({playerInfo}) => {
// Add Mats
const addMats = (playerInfo) => {
    console.log(playerInfo)
}

    return (
        <div className="mat-container">
            <MaterialForm onAdd={addMats} playerInfo={playerInfo} />
        </div>
    )
}

export default AddMaterials
