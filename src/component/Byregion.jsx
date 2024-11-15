import React, { useState } from "react";
import Mealcards from "./Mealcards";
const Byregion = () =>{
    const [data,setData] = useState()
    const [search, setSearch] = useState()
    const handleInput = (event) =>{
        setSearch(event.target.value)
    }
    const myFun = async() =>{
        const get = await fetch(`https://cosylab.iiitd.edu.in/recipe-search/regions?searchText=${search}&pageSize=10`)
        const jsonData = await get.json()
        console.log(jsonData.payload.data);
        setData(jsonData.payload.data)
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
                    <Mealcards detail = {data}/>
                </div>
            </div>   
        
        </>
    )
}
export default Byregion