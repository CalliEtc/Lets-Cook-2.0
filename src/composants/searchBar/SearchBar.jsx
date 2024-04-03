import React, { useState, useEffect } from "react";

function SearchBar({ recipes, setRecipe}) {
    const [searchTerm, setSearchTerm] = useState('');
    console.log(recipes);

    useEffect(() => {
        filterData(searchTerm);
    }, [searchTerm]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
    };
    
    const filterData = (searchTerm) => {
        
            const filteredData = recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setRecipe(filteredData);
            console.log(filteredData)
            console.log(searchTerm)
    };
    
   
    return (
        <div className="m-5">
            <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    placeholder="Search for anything..." 
                    type="search" 
                    name="search" 
                    value={searchTerm} 
                    onChange={handleInputChange}
                />
            </label>
            <ul>
               
            </ul>
        </div>
    );
}

export default SearchBar;
