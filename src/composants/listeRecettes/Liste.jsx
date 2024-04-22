import RecipeCard from "./RecipeCard";

function Liste({
  recipes,
  setRecipe,
  searchTerm,
  favorites,
  setFavorites,
  buttonIsTrue,
}) {
  // Filtrer les recettes en fonction de certains critères
const filteredRecipes = recipes.filter((recipe) => {
  // Afficher les informations sur la recette actuelle
  console.log("filtre", recipe);

  // Vérifier si le titre de la recette contient la recherche en cours, indépendamment de la casse
  const testSearch = recipe.title
    .toLowerCase()  // Convertir le titre en minuscules
    .includes(searchTerm.toLowerCase());  // Vérifier si le terme de recherche est inclus dans le titre, en minuscules

  // Vérifier si la recette est marquée comme favorite
  const testFavoris = recipe.favorites == true;  // Vérifier si la recette a été marquée comme favorite

  // Afficher les résultats des tests effectués
  console.log("test", testSearch);  // Afficher si la recette passe le test de recherche
  console.log("testFavoris", testFavoris);  // Afficher si la recette est marquée comme favorite

  // Retourner la recette si elle passe les tests en fonction de l'état actuel du bouton
  return buttonIsTrue ? testSearch && testFavoris : testSearch;
  // Si le bouton est activé (true), retourne true si la recette passe à la fois le test de recherche et le test de favoris,
  // sinon retourne true seulement si la recette passe le test de recherche.
});
;

  return (
    <div className="m-8">
      <h1 className="p-1 font-bold text-xl">Liste de recettes de cuisine</h1>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredRecipes.map((recipes) => (
          <RecipeCard
            key={recipes.id}
            recipes={recipes}
            setRecipe={setRecipe}
            favorites={favorites}
            setFavorites={setFavorites}
            filteredRecipes={filteredRecipes}
          /> 
        ))}
      </div>
    </div>
  );
}

export default Liste;
