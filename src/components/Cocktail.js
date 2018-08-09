import React from 'react'

const Cocktail = ({cocktail, clickHandler}) => {
  return (
    <li > <a onClick={(event) =>{clickHandler(event,cocktail)}} href={`${cocktail.name}`}> {cocktail.name} </a> </li>
  )
}

export default Cocktail
