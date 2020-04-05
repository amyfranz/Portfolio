import React from "react";
// import "./Recipe.css";

const Recipe = ({
  title,
  calories,
  img_url,
  ingredients,
  source,
  source_url,
}) => {
  return (
    <div key={title + calories} className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {Math.ceil(calories)}</p>
      <img src={img_url} alt="" className="image" />
      <a href={source_url} target="_blank" rel="noopener noreferrer">
        <b>{source}</b>
      </a>
    </div>
  );
};

export default Recipe;
