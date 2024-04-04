import RecipeCard from "./RecipeCard"; 

function Liste({ recipes, setRecipe, searchTerm, favorites, setFavorites}) {

  const filteredRecipes = recipes.filter((recipe) =>
  recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className="m-8">
      <h1 className="p-1 font-bold text-xl">Liste de recettes de cuisine</h1>
      <div className="container mx-auto grid grid-cols-3 gap-10">
        {filteredRecipes.map(recipes => (
          <RecipeCard key={recipes.id} recipes={recipes} setRecipe={setRecipe} favorites={favorites} setFavorites={setFavorites}/> // Le composant RecipeCard ici
        ))}
      </div>
    </div>
  );
}

export default Liste;