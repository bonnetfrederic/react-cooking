import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MealCard from './components/MealCard';

const App = () => {
  // Lien sur TheMealDB
  // créer une variable pour stocker les recette (useState)
  // aller chercher les données avec Axios via le useEffect
  // Afficher les données à l'écran via un map() : nom, origine, photo, lien de la vidéo
  //   et envoyer en props dans un composant Card
  // Rechercher un repas via un input

  // Bonus: proposer des boutons avec des spécialités de certains pays (french, italian, etc.) 

  const [mealsData, setMealsData] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const areas = ["","French", "Italian", "Croatian", "Indian", "British", "Chinese", "Canadian", "Greek", "Japanese", "Dutch"];

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchCriteria)
      .then((res) => setMealsData(res.data.meals))
  }, [searchCriteria]);

  return (
    <div className="container">
      <h1>Meal App</h1>
      <div className="search-container">
        <input type="text" onChange={e => setSearchCriteria(e.target.value)} />
        <select onChange={(e) => setSelectInput(e.target.value)}>
          {areas.map((area) => (
            <option 
              key={area} 
              value={area}
              selected={area === selectInput ? "selected" : null}
              >{area}</option>
          ))}
        </select>
        <button onClick={() => setSelectInput("")}>Effacer les critères</button>
      </div>
      <div className="mealsContainer">
        {mealsData ? (
          mealsData
            .filter((meal) => meal.strArea.includes(selectInput))
            .map((meal) =>
            <MealCard meal={meal} key={meal.idMeal} />)
        ) : (
          <p>Aucun résultat</p>
        )}
      </div>
    </div>
  );
};

export default App;
