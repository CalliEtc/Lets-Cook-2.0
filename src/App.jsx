import './App.css'
import Navbar from './composants/header/Navbar'
import Liste from'./composants/listeRecettes/Liste'
import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {

  const [recipe, setRecipe] = useState(null);

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
 
  console.log(recipe);

  return (
    <>
     <Navbar />
     <Liste recipe={recipe}/>
    </>
  )
}

export default App
