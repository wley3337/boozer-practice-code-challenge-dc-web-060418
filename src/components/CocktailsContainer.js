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
  const ingredientAmounts = this.constructIngredientList(cocktailObj.id);
  const ingredientObjects = this.state.ingredients.filter(ingredient => {
    for(const ing of ingredientAmounts){
      if(ingredient.id === ing.ingredient_id){
        return true;
      }
    }
  })

  
    const ingList =[]
     for(const ing of ingredientObjects){
      for(const amount of ingredientAmounts){
        if(amount.ingredient_id === ing.id){
          ingList.push({name: ing.name, amount: amount.amount})
        }
      }
    }
    
  
  this.setState({
    cocktailFocus: {cocktailObj, ingList}
  })
}

constructIngredientList= (id) => {
  return  this.state.proportions.filter(ingredient => ingredient.cocktail_id === id);
}

createCocktail =(e) =>{
  e.preventDefault();

const newCocktail = {
  name: e.target[0].value,
  description: e.target[1].value,
  instructions: e.target[2].value
}

const eventIngArray = e.target

const newCocktailIng ={};
for(let i =3; i < eventIngArray.length - 2; i = i + 2){
  newCocktailIng[i-2] ={};
  newCocktailIng[i-2].name = eventIngArray[i].value; 
  newCocktailIng[i-2].quantity = eventIngArray[i+1].value
}


for(const key of Object.keys(newCocktailIng)){
  const doesExist = this.state.ingredients.find(existingIng => existingIng.name === newCocktailIng[key].name);
 
  if(doesExist !== undefined ){
    debugger
    newCocktailIng[key].ingredient_id = doesExist.id
  } 
}

debugger





}

  render(){
    return (
      <div className="container">
        <CocktailsList allCoctailsToDisplay= {this.state.allCoctails} clickHandler={this.handleSelectDetail}/>
       { (this.state.cocktailFocus.cocktailObj) ? <CocktailDisplay cocktail={this.state.cocktailFocus} /> : null}
      <Form formSubmit={this.createCocktail}/>
      </div>
    )
  }
}

export default CocktailsContainer
