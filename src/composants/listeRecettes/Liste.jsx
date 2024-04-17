import RecipeCard from "./RecipeCard"; 

function Liste({ recipes, setRecipe, searchTerm, favorites, setFavorites}) {

 // Utilisation de la méthode filter() sur le tableau recipes pour filtrer les recettes en fonction d'un critère
// La fonction de filtrage est une fonction anonyme qui prend une recette comme paramètre
// Elle vérifie si le titre de la recette (en minuscules) contient le terme de recherche (également en minuscules)
const filteredRecipes = recipes.filter((recipe) =>
recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className="m-8">
      <h1 className="p-1 font-bold text-xl">Liste de recettes de cuisine</h1>
      <div className="container mx-auto grid grid-cols-3 gap-10">
        {filteredRecipes.map(recipes => (
          <RecipeCard key={recipes.id} recipes={recipes} setRecipe={setRecipe} favorites={favorites} setFavorites={setFavorites} filteredRecipes={filteredRecipes}/> // Le composant RecipeCard ici
        ))}
      </div>
    </div>
  );
}

export default Liste;