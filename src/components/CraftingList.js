import React from 'react'

const CraftingList = ({armor, playerInfo}) => {
    return (
        <div className="crafting-container">
            <div className="crafting-wrapper">
                {
                    armor.map((item) => (
                        <>
                            <div className="item" key={item.id}>
                                { 
                                    <div className="item-container">
                                        <img className="item-img" src={item.img} alt=""/>
                                        <div className="item-name">{item.name}</div>
                                        <div className="item-lvlreq">{item.levelReq}</div>
                                        <div className="item-xp" >{item.xp}</div>
                                        <div className="btn-container"> 
                                            <button className="add" onClick={() => console.log(playerInfo.linen, playerInfo.courseLeather)}>+</button>
                                            <button className="subtract">-</button>
                                        </div>
                                    </div>
                                }
                            </div>


                            {/* <ul className="mats">
                                {
                                    item.materials.map((mats) => (
                                        <li className="mats-li"> {mats.mat + ": " + mats.amount} </li>
                                    ))
                                }  
                            </ul> */}
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default CraftingList
