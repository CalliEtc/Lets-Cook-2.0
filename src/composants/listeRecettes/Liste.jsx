import React from "react";
import RecipeCard from "./RecipeCard"; 

function Liste({ recipe }) {
  return (
    <div className="m-8">
      <h1 className="p-1 font-bold text-xl">Liste de recettes de cuisine</h1>
      <div className="container mx-auto grid grid-cols-3 gap-10">
        {recipe && recipe.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} /> // Le composant RecipeCard ici
        ))}
      </div>
    </div>
  );
}

export default Liste;