import React from 'react'
import armoring from '../Craftables/armoringCrafts'

const Armoring = () => {
    return (
        <div>
            {
                armoring.map((item) => (
                    <>
                        <h3 className="item" key={item.id}>
                            { item.name + " - " + item.xp + " xp" }
                        </h3>
                        <p>
                            {
                                item.materials.map((mats) => (
                                    <ul> {mats.mat + ": " + mats.amount} </ul>
                                 ))
                            }  
                        </p>
                    </>
                ))
            }
        </div>
    )
}

export default Armoring
