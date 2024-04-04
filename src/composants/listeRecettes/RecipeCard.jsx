import React from "react";
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid'; 
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline'; 


function RecipeCard({ recipes, setRecipe, favorites, setFavorites }) {

  const handleAddFavorite = (id) => {
    setRecipe((prevRecipe) => ({ ...prevRecipe, favorite: true }));
    const favoriteElement = { ...recipes, favorite: true };
    setFavorites([...favorites, favoriteElement]);
  };

  // const handleRemoveFavorite = (id) => {
  //   const updatedFavorites = favorites.filter((element) => element.id !== id);
  //   setFavorites(updatedFavorites);
  //   setRecipe((prevRecipe) => ({ ...prevRecipe, favorite: false }));
  // };

  return (
    <div className="container mx-auto shadow-md">
      <img
        src={recipes.imageUrl}
        alt={recipes.title}
        style={{ maxWidth: "100%" }}
      />
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
        <br/>
        <button
          onClick={() =>
            recipes.favorites
              ? 
              handleRemoveFavorite(recipes.id)
              : handleAddFavorite(recipes.id)
          }
        >
          {recipes.favorites ? ("favoris") : ("Mettre en favoris")}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
