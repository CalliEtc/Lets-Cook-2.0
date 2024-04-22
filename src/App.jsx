import './App.css'
import Navbar from './composants/header/Navbar'
import Liste from'./composants/listeRecettes/Liste'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from './composants/footer/Footer.jsx';
import SearchBar from './composants/searchBar/SearchBar.jsx';


function App() {

  const [recipes, setRecipe] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([]);
  const [buttonIsTrue, setButtonIsTrue] = useState(false);
  
// Fonction pour gérer les changements dans le champ de recherche

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
// Fonction pour gérer le clic sur le bouton favoris
  const handleButton = () => {
    setButtonIsTrue(!buttonIsTrue);
  };

  console.log(buttonIsTrue);

 // Utiliser useEffect pour effectuer une action après le rendu initial
useEffect(() => {
  // Fonction asynchrone pour récupérer les données des recettes depuis un fichier JSON
  const fetchData = async () => {
    try {
      // Effectuer une requête GET avec axios pour récupérer les données depuis le fichier JSON
      const response = await axios.get('../data/recettes.json');
      // Mettre à jour l'état des recettes avec les données récupérées
      setRecipe(response.data);
    } catch (error) {
      // Gérer les erreurs en cas d'échec de la récupération des données
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  // Appeler la fonction fetchData lors du premier rendu uniquement en passant un tableau vide comme deuxième argument
  fetchData();
}, []);  // Tableau vide pour exécuter useEffect uniquement lors du premier rendu
 
  console.log(recipes);

  return (
    <>
     <Navbar handleButton={handleButton}/>
     <SearchBar searchTerm={searchTerm} handleChange={handleChange} handleButton={handleButton} />
     <Liste recipes={recipes} setRecipe={setRecipe} searchTerm={searchTerm} favorites={favorites} setFavorites={setFavorites} buttonIsTrue={buttonIsTrue}/>
     <Footer />

    </>
  )
}

export default App
