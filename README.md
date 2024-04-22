# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## README



### 1\. Description

- Bienvenue sur la page de recettes de Let's Cook ! Cette page est dédiée à la présentation attrayante et organisée de diverses recettes de cuisine. Notre objectif est de fournir une expérience agréable et accessible aux utilisateurs, quel que soit le périphérique qu'ils utilisent.

- Ce projet a été fait sous react et en s'appuyant sur la librairie de ressources Tailwind.

### 2\. Installation 

Pour exécuter ce projet localement, suivez ces étapes :

- Clonez ce dépôt en utilisant la commande git clone dans votre terminal.
- Naviguez vers le répertoire du projet : cd let-s-cook-recipes.
- Installez les dépendances en exécutant : npm install.
- Lancez l'application en utilisant : npm start.


### 3\. Fonctionnalités

- Affichage attrayant des recettes sous forme de cartes dans une grille.
- Navigation intuitive entre les différentes recettes.
- Filtre en fonction  de mot tapé 
- Filtre en fonction des favoris
- Prise en charge de différents périphériques (desktop, notebook, mobile, tablette).

### 4\. Structures

- Le fichier principal est app et le reste sont des composants.
- Le dossier header sert à afficher une navbar comprenant les liens fictifs vers d'autres pages et le bouton favoris.
- Le dossier listeRecettes a deux composants : Liste et RecipeCard. RecipeCard est un composant qui permet l'affichage des recettes sous la forme de carte détaillé. Le fichier Liste affiche un nombre de cartes correpondant aux nombres de recettes.
- Le dossier searchBar à un fichier SearchBar qui gère la récupération des valeurs écrit dans la navbar. Qui est ensuite utilisé pour filtrer les cards.
- Le dossier Footer à un fichier footer qui gère l'affichage du footer.
- Le dossier data contient un fichier JSON appelé recettes. Dans ce fichier est regroupé toute les recettes et leur informations.
- Le dossier images regroupes différentes images utilisés.



### 5\. Ressources supplémentaires 

- ReactJS - Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- Tailwind CSS - Cadre CSS utilitaire pour le stylage rapide et flexible.