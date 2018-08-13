import React, { Component } from 'react'
import Ing from './IngInputs'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      description: '',
      instructions: '',
      ingredientInputs: ['input-0']
      
    }
  }


  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onButtonClick = (e) => {
    e.preventDefault();
    const newIng = `input-${this.state.ingredientInputs.length}`
    this.setState({
      ingredientInputs: [...this.state.ingredientInputs, newIng]
    })
  }

  render(){
    return (
      <form onSubmit={this.props.formSubmit}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>

        <p>Description</p>
        <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange}/>

        <p>Instructions</p>
        <input type="text" name="instructions" value={this.state.instructions} onChange={this.handleOnChange}/>

        <h3>Proportions</h3>
        <div className="container">
         { this.state.ingredientInputs.map(ing => <Ing key={ing}/>)}
         
        </div>

        <p><button onClick={this.onButtonClick}> + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form
