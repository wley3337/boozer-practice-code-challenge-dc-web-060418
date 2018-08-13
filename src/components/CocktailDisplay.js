import React from 'react'
import Ingredient from './Ingredient'

const CocktailDisplay = ({cocktail}) => {
 
  return (
     <div id="cocktail-display">
      <h1>Cocktail Name: {cocktail.cocktailObj.name}</h1>
      <h3>Cocktail Description: {cocktail.cocktailObj.description}</h3>
      <p>Cocktail Instructions: {cocktail.cocktailObj.Instructions}</p>
      <ul>
         { cocktail.ingList.map( ing => <Ingredient ingredient={ing}/>)}
      </ul>
    </div>
    
  )
}

export default CocktailDisplay
