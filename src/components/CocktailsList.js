import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    return (
      <ul id="cocktail-list">
         {this.props.allCoctailsToDisplay.map(cocktail => <Cocktail key={cocktail.id}  cocktail={cocktail} clickHandler={this.props.clickHandler}/>)}

      </ul>
    )
  }
}

export default CocktailsList
