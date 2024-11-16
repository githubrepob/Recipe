import React from "react";
import { NavLink } from "react-router-dom";
import '../Mealcards.css'; 

const Rcards = ({ detail }) => {
  const cleanTitle = (title) => {
    if (typeof title === "string") {
      return title.replace(/<[^>]+>/g, "");
    }
    return title;
  };

  const renderDetail = (detail) => {
    if (!detail) return null;
    console.log({detail})

    return (
      <div className="mealCard">
        <p className="mealtitle"><strong>Receptor Name:</strong> {detail.receptor_name}</p>
        <p className="mealtitle"><strong>ID:</strong> {detail.id}</p>
        <p className="mealtitle"><strong>Taste:</strong> {detail.taste}</p>
        {/* Add more fields as needed */}
      </div>
    );
  };

  return (
    <div className="meals">
      {detail ? (
        <div>{renderDetail(detail)}</div>  // Render specific details of the object
      ) : (
        ""  // Provide a fallback in case detail is falsy
      )}
    </div>
  );
};

export default Rcards;  // Ensure the name matches the component's name
