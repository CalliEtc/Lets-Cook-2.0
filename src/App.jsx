import './App.css'
import Navbar from './composants/header/Navbar'
import Liste from'./composants/listeRecettes/Liste'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from './composants/footer/Footer.jsx';
import SearchBar from './composants/searchBar/SearchBar.jsx';

function App() {

  const [recipes, setRecipe] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await axios.get('../data/recettes.json');
      setRecipe(response.data)
    }catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
    };
    fetchData();
  }, [])
 
  console.log(recipes);

  return (
    <>
     <Navbar />
     <SearchBar recipes={recipes} setRecipe={setRecipe} />
     <Liste recipes={recipes}/>
     <Footer />
    </>
  )
}

export default App
