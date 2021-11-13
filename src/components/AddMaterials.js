import React from 'react'
import MaterialForm from './MaterialForm'

const AddMaterials = ({playerInfo}) => {
    return (
        <div className="mat-container">
            <MaterialForm mat="Linen" />
            <MaterialForm mat="Course Leather" />
            <MaterialForm mat="Iron Ingot" />
        </div>
    )
}

export default AddMaterials
