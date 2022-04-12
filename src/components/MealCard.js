import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({meal}) => {
  return (
    <div className='card'>
      <h2>{meal.strMeal}</h2>
      <p>{meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"image plat " + meal.strMeal} />
      <a href={meal.strYoutube} target="_blank">voir la vidéo</a>
      {/* <Link to="" /> */}
    </div>
  );
};

export default MealCard;