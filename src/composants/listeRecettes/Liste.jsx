import React from "react";

function Liste ({recipe}) {

    return (
        <div className="m-8	">
        <h1 className="p-1 font-bold text-xl">Liste de recettes de cuisine</h1>
        <div className="container mx-auto grid grid-cols-3 gap-10">
        {recipe && recipe.map(recipe => (
          <div key={recipe.id} className="container mx-auto shadow-md ">
            <img src={recipe.imageUrl} alt={recipe.title} style={{maxWidth: '100%'}} />
            <h2 className="p-1 font-medium">{recipe.title}</h2>
            <p><strong>Difficulté:</strong> {recipe.difficulty}</p>
            <p><strong>Catégorie:</strong> {recipe.category}</p>
            <p>{recipe.description}</p>
            <p><strong>Auteur:</strong> {recipe.author}</p>
            <p className="text-right	">En savoir plus</p>
          </div>
        ))}
        </div>
      </div>
    )
    }


export default Liste 
