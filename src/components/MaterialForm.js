import React from 'react'
import { useState } from 'react'

const MaterialForm = ({playerInfo}) => {
    const [amountLinen, setAmountLinen] = useState(0)
    const [amountCourseLeather, setAmountCourseLeather] = useState(0)
    const [amountIronIngot, setAmountIronIngot] = useState(0)

    const [linenText, setLinenText] = useState("")
    const [courseLeatherText, setCourseLeatherText] = useState("")
    const [ironIngotText, setIronIngotText] = useState("")

    const [showAddMats, setShowAddMats] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        playerInfo.linen = amountLinen
        playerInfo.courseLeather = amountCourseLeather
        playerInfo.ironIngot = amountIronIngot

        setLinenText(amountLinen)
        setCourseLeatherText(amountCourseLeather)
        setIronIngotText(amountIronIngot)

        setShowAddMats(false)
        
        //console.log(playerInfo)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="mat-wrapper">
                {showAddMats ? "Linen: " : "Linen: " + linenText} 
                { showAddMats &&
                    <input 
                        className="input" 
                        type="number" 
                        value={amountLinen} 
                        onChange={(e) => setAmountLinen(e.target.value)}
                    />
                }
            </div>

            <div className="mat-wrapper">
                {showAddMats ? "Course Leather: " : "Course Leather: " + courseLeatherText} 
                { showAddMats &&
                    <input 
                        className="input" 
                        type="number" 
                        value={amountCourseLeather} 
                        onChange={(e) => setAmountCourseLeather(e.target.value)}
                    />
                }   
            </div>

            <div className="mat-wrapper">
                {showAddMats ? "Iron Ingot: " : "Iron Ingot: " + ironIngotText} 
                { showAddMats &&
                    <input 
                        className="input" 
                        type="number" 
                        value={amountIronIngot} 
                        onChange={(e) => setAmountIronIngot(e.target.value)}
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
    )
}

export default MaterialForm
