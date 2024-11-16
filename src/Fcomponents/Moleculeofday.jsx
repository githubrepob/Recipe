import React, { useState } from "react";
import Molofday from "./Molofday";
import '../rod.css';  // Assuming your CSS is in App.css

const Moleculeofday = () => {
  const [data, setData] = useState();

  const myFun = async () => {
    const get = await fetch(`https://cosylab.iiitd.edu.in/api/moleculeOfTheDay`);
    const jsonData = await get.json();
    console.log(jsonData);
    setData(jsonData);
  }
  console.log(data);

  return (
    <div>
      <center>
        <p><br/><br/></p>
      <button className="recipe-button" onClick={myFun}>Show Molecule of the Day!</button></center>
      <div className="recipe-content">
        <Molofday detail={data} />
      </div>
    </div>
  );
}

export default Moleculeofday;
