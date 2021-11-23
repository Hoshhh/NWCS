import React from 'react'
import "../Styles/Armoring.css"
import Navbar from '../components/Navbar'
import ProfessionsBar from '../components/ProfessionsBar'
import AddMaterials from '../components/AddMaterials'
import CraftingList from '../components/CraftingList'
import MaterialsRequired from '../components/MaterialsRequired'
import armoring from '../Craftables/armoringCrafts'

const Armoring = ({playerInfo}) => {
    return (
        <div>
            <Navbar />
            <ProfessionsBar />
            <div className="main-container">
                <AddMaterials playerInfo={playerInfo} />
                <CraftingList armor={armoring} playerInfo={playerInfo} />
                <MaterialsRequired />
            </div>
        </div>
    )
}

export default Armoring
