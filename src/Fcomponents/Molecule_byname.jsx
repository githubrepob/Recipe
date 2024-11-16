import React, { useState } from "react";
import Flavcard from './Flavcard'
const Molecule = () =>{
    const [data,setData] = useState()
    const [search, setSearch] = useState()
    const handleInput = (event) =>{
        setSearch(event.target.value)
    }
    const myFun = async() =>{
        const get = await fetch(`https://cosylab.iiitd.edu.in/api/molecule/getmoleculebyname/${search}`)
        const jsonData = await get.json()
        console.log(jsonData);
        setData(jsonData)
    }
    console.log(data)
    return (
        <>
            <div>
                <div className="searchBar">
                    <input type = "text" placeholder="Enter Name of the Molecule" onChange={handleInput}/>
                    <button onClick={myFun}>Search</button>
                </div>
                <div>
                    <Flavcard detail = {data}/>
                </div>
            </div>   
        
        </>
    )
}
export default Molecule