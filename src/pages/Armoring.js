import React, { useState } from 'react'
import "../Styles/Armoring.css"
import Navbar from '../components/Navbar'
import ProfessionsBar from '../components/ProfessionsBar'
import AddMaterials from '../components/AddMaterials'
//import MaterialsRequired from '../components/MaterialsRequired'
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
    const [linenSum, setLinenSum] = useState(0)
    const [courseLeatherTotal, setCourseLeatherTotal] = useState(armoring.courseLeatherTotal)
    const [courseLeatherSum, setCourseLeatherSum] = useState(0)
    const [ironIngotTotal, setIronIngotTotal] = useState(armoring.ironIngotTotal)
    const [ironIngotSum, setIronIngotSum] = useState(0)
    const [playerLvl, setPlayerLvl] = useState(0)
    const [showEditLvl, setShowEditLvl] = useState(false)

    const [xp, setXp] = useState(0);
    const [newPlayer, setNewPlayer] = useState(player)

    const onSubmit = (e) => {
        e.preventDefault()
        player.linen = linenAmount
        player.courseLeather = courseLeatherAmount
        player.ironIngot = ironIngotAmount
        player.armoringLvl = playerLvl

        setShowAddMats(false)
        setShowEditLvl(false)
        setNewPlayer({...player, linenAmount, courseLeatherAmount, ironIngotAmount})
        console.log(newPlayer)
    }

    const add = (item) => {
        let updating = craftUpdate //Used to rerender when there's no value changed between the different "craftAmounts"
        updating++
        
        //Adding all totalLinen values together
        if ((linenSum < linenAmount - item.materials[0].linenCost) && (courseLeatherSum < courseLeatherAmount - item.materials[1].courseLeatherCost) && (ironIngotSum < ironIngotAmount - item.materials[2].ironIngotCost)) {
            setLinenSum(linenSum + item.materials[0].linenCost)
            setCourseLeatherSum(courseLeatherSum + item.materials[1].courseLeatherCost)
            setIronIngotSum(ironIngotSum + item.materials[2].ironIngotCost)
        }

        if ((linenSum > linenAmount) && (courseLeatherSum > courseLeatherAmount) && (ironIngotSum > ironIngotAmount)) {
            setLinenSum(linenSum - item.materials[0].linenCost)
            setCourseLeatherSum(courseLeatherSum - item.materials[1].courseLeatherCost)
            setIronIngotSum(ironIngotSum - item.materials[2].ironIngotCost)
        }

        if ((linenSum < linenAmount - item.materials[0].linenCost) && (courseLeatherSum < courseLeatherAmount - item.materials[1].courseLeatherCost) && (ironIngotSum < ironIngotAmount - item.materials[2].ironIngotCost)){
            if ((item.materials[0].linenCost * (item.crafts) < linenAmount + item.materials[0].linenCost) && (item.materials[1].courseLeatherCost * (item.crafts) < courseLeatherAmount + item.materials[1].courseLeatherCost) && (item.materials[2].ironIngotCost * (item.crafts) < ironIngotAmount + item.materials[2].ironIngotCost)) {
                if ((item.materials[0].linenCost * (item.crafts) > linenAmount - item.materials[0].linenCost) && (item.materials[1].courseLeatherCost * (item.crafts) > courseLeatherAmount - item.materials[1].courseLeatherCost) && (item.materials[2].ironIngotCost * (item.crafts) > ironIngotAmount - item.materials[2].ironIngotCost)) {
                    item.crafts--
                    setCraftAmount(item.crafts)
                }
                item.crafts++
                setCraftAmount(item.crafts)
                if (item.crafts > 0) {
                    setLinenTotal(item.materials[0].linenCost * (item.crafts))
                    setCourseLeatherTotal(item.materials[1].courseLeatherCost * (item.crafts))
                    setIronIngotTotal(item.materials[2].ironIngotCost * (item.crafts))
                }
            }
        }
        setCraftUpdate(updating)
    }

    const subtract = (item) => {      
        let updating = craftUpdate 
        updating++

        if ((linenSum >= item.materials[0].linenCost * (item.crafts)) && (courseLeatherSum >= item.materials[1].courseLeatherCost * (item.crafts)) && (ironIngotSum >= item.materials[2].ironIngotCost * (item.crafts)) && (item.crafts > 0)) {
            setLinenSum(linenSum - item.materials[0].linenCost)
            setCourseLeatherSum(courseLeatherSum - item.materials[1].courseLeatherCost)
            setIronIngotSum(ironIngotSum - item.materials[2].ironIngotCost)
        }

        if (item.crafts > 0) {
            item.crafts--
        }

        setCraftAmount(item.crafts)
        setLinenTotal(item.materials[0].linenCost * (item.crafts))
        setCourseLeatherTotal(item.materials[1].courseLeatherCost * (item.crafts))
        setIronIngotTotal(item.materials[2].ironIngotCost * (item.crafts))
        setCraftUpdate(updating)
    }

const craft = () => {

    for (var i = 0; i < armoring.length; i++) {
        if (armoring[i].crafts > 0) {
            setLinenAmount(linenAmount - linenSum)
            setCourseLeatherAmount(courseLeatherAmount - courseLeatherSum)
            setIronIngotAmount(ironIngotAmount - ironIngotSum)
            setLinenSum(0)
            setCourseLeatherSum(0)
            setIronIngotSum(0)
            setCraftAmount(0)

            console.log(newPlayer)
        }
        armoring[i].crafts = 0
    }
    //console.log(craftAmount)
}
//console.log(armoring)
//console.log(xp)
//console.log("linenSum: " + linenSum)
    //console.log("linenAmount: " + linenAmount)
    // console.log("courseSum: " + courseLeatherSum)
    // console.log("courseAmount: " + courseLeatherAmount)
    // console.log("ironSum: " + ironIngotSum)
    // console.log("ironAmount: " + ironIngotAmount)

    return (
        <div>
            <Navbar />
            <ProfessionsBar />
            <div className="main-container">
                <div className="mat-container">
                    <form className="add-form" onSubmit={onSubmit} id="my-form">
                        <div className="lvl-wrapper">
                            Armoring lvl: {newPlayer.armoringLvl}
                            { showEditLvl &&
                                <input 
                                        className="lvl-input" 
                                        type="number"
                                        value={playerLvl} 
                                        onChange={(e) => setPlayerLvl(parseInt(e.target.value))}
                                />
                            }                           

                        { showEditLvl &&
                            <input type="submit" value="Save" className="edit-btn" />
                        }

                        { !showEditLvl &&
                            <button className="edit-btn" onClick={() => setShowEditLvl(!showEditLvl)}>Edit</button>
                        }
                        </div>

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
                    <button type="submit" form="my-form" onClick={() => craft()} className="craft-btn">Craft</button>
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
