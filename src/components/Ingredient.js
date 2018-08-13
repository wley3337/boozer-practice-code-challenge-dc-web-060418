import React from 'react'


const ingredientList = ({ingredient}) => {
   return  <li>Name: {ingredient.name} Amount: {ingredient.amount}</li>
}

export default ingredientList