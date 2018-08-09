import React from 'react'

const CocktailDisplay = ({cocktailObj, ingredientObjects}) => {
  debugger
  return (
    <div id="cocktail-display">
      <h1>Cocktail Name: {cocktailObj.name}</h1>
      <h3>Cocktail Description: {cocktailObj.description}</h3>
      <p>Cocktail Instructions: {cocktailObj.Instructions}</p>
    </div>
  )
}

export default CocktailDisplay
