import RecipeCard from "./RecipeCard"; 

function Liste({ recipes}) {
  return (
    <div className="m-8">
      <h1 className="p-1 font-bold text-xl">Liste de recettes de cuisine</h1>
      <div className="container mx-auto grid grid-cols-3 gap-10">
        {recipes && recipes.map(recipes => (
          <RecipeCard key={recipes.id} recipes={recipes} /> // Le composant RecipeCard ici
        ))}
      </div>
    </div>
  );
}

export default Liste;