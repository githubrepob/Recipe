import React, { useState } from "react";
import Recofday from "./recofdaycard";
import '../rod.css';  // Assuming your CSS is in App.css

const Recipeofday = () => {
  const [data, setData] = useState();

  const myFun = async () => {
    const get = await fetch(`https://cosylab.iiitd.edu.in/recipe/recipeOftheDay`);
    const jsonData = await get.json();
    console.log(jsonData.payload);
    setData(jsonData.payload);
  }

  console.log(data);

  return (
    <div className="recipe-container">
      <button className="recipe-button" onClick={myFun}>Show Recipe of the Day!</button>
      <div className="recipe-content">
        <Recofday detail={data} />
      </div>
    </div>
  );
}

export default Recipeofday;
