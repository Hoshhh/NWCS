import React from 'react'

const CraftingList = ({armor}) => {
    return (
        <div className="crafting-container">
            <div className="crafting-wrapper">
                {
                    armor.map((item) => (
                        <>
                            <h3 className="item" key={item.id}>
                                { item.name + " - " + item.xp + " xp" }
                            </h3>
                            <ul className="mats">
                                {
                                    item.materials.map((mats) => (
                                        <li className="mats-li"> {mats.mat + ": " + mats.amount} </li>
                                    ))
                                }  
                            </ul>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default CraftingList
