import React from "react";
import { NavLink } from "react-router-dom";
import '../Mealcards.css'; 

const Flavcards = ({ detail }) => {
  const cleanTitle = (title) => {
    if (typeof title === "string") {
      return title.replace(/<[^>]+>/g, "");
    }
    return title;
  };

  const renderDetail = (detail) => {
    if (!detail) return null;

    return (
      <div className="mealCard">
        <p className="mealtitle"><strong>Common Name:</strong> {detail.commonName}</p>
        <p className="mealtitle"><strong>SMILE:</strong> {detail.smile}</p>
        <p className="mealtitle"><strong>Molecular Weight:</strong> {detail.molecularWeight}</p>
        <p className="mealtitle"><strong>Odor:</strong> {detail.odor}</p>
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

export default Flavcards;  // Ensure the name matches the component's name
