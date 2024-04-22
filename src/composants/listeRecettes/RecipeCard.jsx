import React from "react";

function RecipeCard({ recipes, setRecipe, favorites, filteredRecipes }) {
  console.log("ok", recipes);
  // Fonction handleAddFavorite qui prend un identifiant (id) en paramètre
  const handleAddFavorite = (id) => {
    // Utilisation de la fonction setRecipe pour mettre à jour l'état des recettes
    setRecipe(
      // Mapping sur les recettes filtrées (filteredRecipes) pour les mettre à jour
      filteredRecipes.map((recipe) =>
        // Vérification si l'identifiant de la recette correspond à celui passé en paramètre
        recipe.id === id ? 
          // Si oui, retourner la recette avec le statut favori inversé
          { ...recipe, favorites: !recipe.favorites } : 
          // Si non, retourner la recette sans modification
          recipe
      )
    );
    
  };

  console.log("favoris", favorites)

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

        <p>{recipes.description}</p>
        <button className="text-right text-green-700">En savoir plus</button>
        <br />
        <button 
          onClick={
            () => handleAddFavorite(recipes.id)
          }
        >
          {recipes.favorites ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-6 h-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
