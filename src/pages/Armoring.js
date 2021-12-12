import React, { useState } from 'react'
import "../Styles/Armoring.css"
import Navbar from '../components/Navbar'
import ProfessionsBar from '../components/ProfessionsBar'
import AddMaterials from '../components/AddMaterials'
import MaterialsRequired from '../components/MaterialsRequired'
import armoring from '../Craftables/armoringCrafts'
import levels from '../Craftables/armoringLevels'

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
    const [craftAmount, setCraftAmount] = useState(0)
    const [craftUpdate, setCraftUpdate] = useState(0)
    const [linenTotal, setLinenTotal] = useState(0)
    const [linenSum, setLinenSum] = useState(0)
    const [courseLeatherTotal, setCourseLeatherTotal] = useState(0)
    const [courseLeatherSum, setCourseLeatherSum] = useState(0)
    const [ironIngotTotal, setIronIngotTotal] = useState(0)
    const [ironIngotSum, setIronIngotSum] = useState(0)
    const [playerLvl, setPlayerLvl] = useState(0)
    const [showEditLvl, setShowEditLvl] = useState(false)
    const [percentage, setPercentage] = useState(0)

    const [xp, setXp] = useState(0);
    const [xpLeft, setXpLeft] = useState(0)
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

        for (var key in levels) {
            if (levels.hasOwnProperty(key)) {
                if (player.armoringLvl === parseInt(key) && xp <= levels[key]) {
                    setXp(levels[key]) 
                }

                setXpLeft((levels[player.armoringLvl + 1] - levels[player.armoringLvl]) - (xp - levels[player.armoringLvl]))
            }
        }
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
                }
                item.crafts++
                setCraftAmount(craftAmount + 1)
                console.log(craftAmount)
                setXp( xp + item.xp)
                if (item.crafts > 0) {
                    setLinenTotal(linenTotal + (item.materials[0].linenCost))
                    setCourseLeatherTotal(courseLeatherTotal + (item.materials[1].courseLeatherCost))
                    setIronIngotTotal(ironIngotTotal + (item.materials[2].ironIngotCost))
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
            setXp( xp - item.xp)
            setCraftAmount(craftAmount - 1)

            if (craftAmount > 0) {
                setLinenTotal(linenTotal - (item.materials[0].linenCost))
                setCourseLeatherTotal(courseLeatherTotal - (item.materials[1].courseLeatherCost))
                setIronIngotTotal(ironIngotTotal - (item.materials[2].ironIngotCost))
            }
        }
        

        console.log(craftAmount)
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
        }
        armoring[i].crafts = 0
    }

    for (var key in levels) {
        if (levels.hasOwnProperty(key)) {
            if (xp >= levels[key]) {
                player.armoringLvl = parseInt(key)
            }

            setXpLeft((levels[player.armoringLvl + 1] - levels[player.armoringLvl]) - (xp - levels[player.armoringLvl]))
            setPercentage(Math.round(100 * (xp - levels[player.armoringLvl])/(levels[player.armoringLvl + 1] - levels[player.armoringLvl])))
        }
    }
    setPlayerLvl(player.armoringLvl)
}


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
                                            </div>
                                            <div className="xp-flex-container">
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

                
                <MaterialsRequired linen={linenTotal} course={courseLeatherTotal} iron={ironIngotTotal} percent={percentage} remaining={xpLeft} />
            </div> 
        </div>
    )
}

export default Armoring
