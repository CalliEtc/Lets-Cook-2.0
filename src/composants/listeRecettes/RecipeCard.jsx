import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="container mx-auto shadow-md">
      <img src={recipe.imageUrl} alt={recipe.title} style={{ maxWidth: "100%" }} />
      <h2 className="p-1 font-medium text-green-700">{recipe.title}</h2>
      <div className="p-1">
        <p>
          <strong>Difficulté:</strong>{" "}
          {Array(recipe.difficulty).fill("⭐").join(" ")}
        </p>
        <p>
          <strong>Catégorie:</strong> {recipe.category}
        </p>
        <p>
          <strong>Auteur:</strong> {recipe.author}
        </p>
        <p>{recipe.description}</p>
        <button className="text-right text-green-700">En savoir plus</button>
      </div>
    </div>
  );
}

export default RecipeCard;