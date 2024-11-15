import React from "react";
import { NavLink } from "react-router-dom";
import '../Mealcards.css'; // import your custom CSS file

const Mealcards = ({ detail }) => {
  // Function to remove HTML tags from the recipe title
  const cleanTitle = (title) => {
    return title.replace(/<[^>]+>/g, "");  // This regex removes all HTML tags
  };

  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((curItem, index) => {
            return (
              <div className="mealCard" key={index}>
                <img src={curItem.img_url} alt={`Recipe Image ${index}`} className="mealImage" />
                <p className="mealTitle">{cleanTitle(curItem.Recipe_title)}</p>
                <p className="mealCalories">Calories: {curItem.Calories}</p>
                <NavLink to={curItem.url}>
                  <button className="recipeButton">Open Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcards;
