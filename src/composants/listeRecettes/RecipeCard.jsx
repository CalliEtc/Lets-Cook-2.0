import React from "react";

function RecipeCard({ recipes }) {
  return (
    <div className="container mx-auto shadow-md">
      <img src={recipes.imageUrl} alt={recipes.title} style={{ maxWidth: "100%" }} />
      <h2 className="p-1 font-medium text-green-700">{recipes.title}</h2>
      <div className="p-1">
        <p>
          <strong>Difficulté:</strong>{" "}
          {Array(recipes.difficulty).fill("⭐").join(" ")}
        </p>
        <p>
          <strong>Catégorie:</strong> {recipes.category}
        </p>
        <p>
          <strong>Auteur:</strong> {recipes.author}
        </p>
        <p>{recipes.description}</p>
        <button className="text-right text-green-700">En savoir plus</button>
      </div>
    </div>
  );
}

export default RecipeCard;