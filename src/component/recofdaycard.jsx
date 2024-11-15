import React from "react";
import { NavLink } from "react-router-dom";
import '../rod.css'

const Recofday = ({ detail }) => {
  const cleanTitle = (title) => {
    return title.replace(/<[^>]+>/g, "");  // This regex removes all HTML tags
  };
  if (!detail) return null;

  return (
    <div className="meals">
      <div className="mealCard">
        <img src={detail.img_url} alt="Recipe" className="mealImage" />
        <p className="mealTitle">{cleanTitle(detail.Recipe_title)}</p>
        <p className="mealCalories">Calories: {detail.Calories}</p>
        <NavLink to={detail.url}>
          <button className="recipeButton">Open Recipe</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Recofday;
