import React, { useState } from "react";
// import Mealcards from "./Mealcards";
import Flavcards from "./Flavcard";
const Flav = () =>{
    const [data,setData] = useState()
    const [search, setSearch] = useState()
    const handleInput = (event) =>{
        setSearch(event.target.value)
    }
    const myFun = async() =>{
        const get = await fetch(`https://cosylab.iiitd.edu.in/api/foodPairingAnalysis/${search}`)
        const jsonData = await get.json()
        console.log(jsonData.similar_entities);
        setData(jsonData.similar_entities)
    }
    console.log(data)
    return (
        <>
            <div>
                <div className="searchBar">
                    <input type = "text" placeholder="What's on your Mind ?" onChange={handleInput}/>
                    <button onClick={myFun}>Search</button>
                </div>
                <div>
                    <Flavcards detail = {data}/>
                </div>
            </div>   
        
        </>
    )
}
export default Flav;