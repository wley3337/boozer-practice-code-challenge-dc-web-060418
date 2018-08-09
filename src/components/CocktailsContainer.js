import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

    constructor(){
      super()
      this.state = {
        allCoctails: [],
        cocktailFocus: {},
        ingredients:[],
        proportions:[],
      }
    }

componentDidMount(){
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
    .then(response => response.json())
    .then(json => this.setState({
      allCoctails: json
    }));
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
    .then(response => response.json())
    .then(json => this.setState({
      ingredients: json
    }))
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
    .then(response => response.json())
    .then(json =>  this.setState({
      proportions: json
    }))
  
}

handleSelectDetail = (event, cocktailObj) =>{
  event.preventDefault();
  const ingredientObjects = this.constructIngredientList(cocktailObj.id);
  this.setState({
    cocktailFocus: {cocktailObj, ingredientObjects}
  })
}

constructIngredientList= (id) => {
  return  this.state.proportions.filter(ingredient => ingredient.cocktail_id === id);
}



  render(){
    return (
      <div className="container">
        <CocktailsList allCoctailsToDisplay= {this.state.allCoctails} clickHandler={this.handleSelectDetail}/>
       { (this.state.cocktailFocus === {}) ? <CocktailDisplay cocktail={this.state.cocktailFocus} /> : null}
        {/* {this.state.allCoctails.map(cocktail => <CocktailDisplay cocktail= {cocktail} />)} */}
      </div>
    )
  }
}

export default CocktailsContainer
