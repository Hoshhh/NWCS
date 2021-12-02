import React, { useState } from 'react'
import "../Styles/Armoring.css"
import Navbar from '../components/Navbar'
import ProfessionsBar from '../components/ProfessionsBar'
import AddMaterials from '../components/AddMaterials'
import MaterialsRequired from '../components/MaterialsRequired'
import armoring from '../Craftables/armoringCrafts'

const player = {
  armoringLvl: 0,
  linen: 0,
  courseLeather: 0,
  ironIngot: 0,
}

const Armoring = () => {
    const [linenAmount, setLinenAmount] = useState(0)
    const [courseLeatherAmount, setCourseLeatherAmount] = useState(player.courseLeather)
    const [ironIngotAmount, setIronIngotAmount] = useState(player.ironIngot)
    const [showAddMats, setShowAddMats] = useState(false)
    const [craftAmount, setCraftAmount] = useState(armoring.crafts)
    const [craftUpdate, setCraftUpdate] = useState(0)
    const [linenTotal, setLinenTotal] = useState(armoring.linenTotal)


    const [newPlayer, setNewPlayer] = useState(player)

    const onSubmit = (e) => {
        e.preventDefault()
        player.linen = linenAmount
        player.courseLeather = courseLeatherAmount
        player.ironIngot = ironIngotAmount

        setShowAddMats(false)
        setNewPlayer({...player, linenAmount, courseLeatherAmount, ironIngotAmount})
        console.log(player)
    }

    const add = (item) => {
        let updating = craftUpdate //Used to rerender when there's no value changed between the different "craftAmounts"
        updating++

        if (item.materials[0].linenCost * (item.crafts) < linenAmount + item.materials[0].linenCost) {
            if (item.materials[0].linenCost * (item.crafts) > linenAmount - item.materials[0].linenCost) {
                item.crafts--
                setCraftAmount(item.crafts)
            }
            item.crafts++
            setCraftAmount(item.crafts)
            if (item.crafts > 0) {
                setLinenTotal(item.materials[0].linenCost * (item.crafts))
            }
        }
         console.log("Cost: " + item.materials[0].linenCost)
         console.log("Crafts: " + item.crafts)
        // console.log("Total: " + linenTotal)

        setCraftUpdate(updating)
    }

    const subtract = (item) => {
        let updating = craftUpdate 
        updating++

        if (item.crafts > 0) {
            item.crafts--
        }
        setCraftAmount(item.crafts)
        setLinenTotal(item.materials[0].linenCost * (item.crafts))
        setCraftUpdate(updating)
        console.log(item.crafts)
        console.log(item.materials[0].linenCost * (item.crafts))
    }

    console.log("Total: " + linenTotal)
    return (
        <div>
            <Navbar />
            <ProfessionsBar />
            <div className="main-container">
                <div className="mat-container">
                    <form className="add-form" onSubmit={onSubmit}>

                        <div className="mat-wrapper">
                            <AddMaterials matAmount={newPlayer.linen} text={"Linen: "}/>
                            { showAddMats &&
                                <input 
                                    className="input" 
                                    type="number" 
                                    value={linenAmount} 
                                    onChange={(e) => setLinenAmount(parseInt(e.target.value))}
                                />
                            }
                        </div>

                        <div className="mat-wrapper">
                            <AddMaterials matAmount={newPlayer.courseLeather} text={"Course Leather: "}/>
                            { showAddMats &&
                                <input 
                                    className="input" 
                                    type="number" 
                                    value={courseLeatherAmount} 
                                    onChange={(e) => setCourseLeatherAmount(parseInt(e.target.value))}
                                />
                            }
                        </div>

                        <div className="mat-wrapper">
                            <AddMaterials matAmount={newPlayer.ironIngot} text={"Iron Ingot: "}/>
                            { showAddMats &&
                                <input 
                                    className="input" 
                                    type="number" 
                                    value={ironIngotAmount} 
                                    onChange={(e) => setIronIngotAmount(parseInt(e.target.value))}
                                />
                            }
                        </div>
                        

                        { showAddMats &&
                            <input type="submit" value="Save Amount" className="btn" />
                        }

                        { !showAddMats &&
                            <button className="btn" onClick={() => setShowAddMats(!showAddMats)}>Add Materials</button>
                        }
                    </form>
                </div>

                {/* Crafting List --------- */}
                <div className="crafting-container">
                    <div className="crafting-wrapper">
                    {
                        armoring.map((item) => (
                            <>
                                <div className="item" key={item.id}>
                                    { 
                                        <div className="item-container">
                                            <div className="item-flex-container">
                                                <img className="item-img" src={item.img} alt=""/>
                                                <div className="item-name">{item.name}</div>
                                                <div className="item-xp" >{item.xp}</div>
                                            </div>
                                            <div className="btn-flex-container">
                                                <button onClick={() => add(item)} className="add-btn">+</button>
                                                <button onClick={() => subtract(item)} className="subtract-btn">-</button>
                                                <div className="item-counter">x {item.crafts}</div>
                                            </div>
                                        </div>
                                    }
                                    
                                </div>
                            </>
                        ))
                    }
                    </div>
                    <button className="craft-btn">Craft</button>
                </div>
                { /*
                    <CraftingList />
                    <MaterialsRequired />
                    <button>Craft</button>
                    */
                }
            </div> 
        </div>
    )
}

export default Armoring
