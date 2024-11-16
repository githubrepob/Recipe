import React, { useState } from "react";
import Rcard from "./Rcard";  // Assuming Rcard is the component used to display individual receptor details

const Rwhole = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const myFun = async () => {
    setLoading(true);  // Set loading to true when the fetch starts
    setError(null);  // Clear previous errors

    try {
      // Fetch data from the API
      const response = await fetch("https://cosylab.iiitd.edu.in/api/receptors");
      
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();
      setData(jsonData);  // Update state with fetched data
    } catch (err) {
      setError(err.message);  // Set error message if fetch fails
    } finally {
      setLoading(false);  // Set loading to false once the request is done (success or failure)
    }
  };

  return (
    <div>
        <center>
            <br /><br />
      <button className="recipe-button" onClick={myFun}>
        Show all Receptors
      </button></center>
      
      {loading && <p>Loading...</p>} {/* Show loading message while data is being fetched */}
      
      {error && <p style={{ color: "red" }}>Error: {error}</p>} {/* Show error message if there is an error */}
      
      <div className="recipe-content">
        {/* Only render Rcard if data is available */}
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <Rcard key={index} detail={item} /> // Pass individual receptor data to Rcard
          ))
        ) : (
          <p>No receptors available</p> // Display this message if data is empty
        )}
      </div>
    </div>
  );
}

export default Rwhole;
