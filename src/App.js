import IngredientList from './components/IngredientList'
import BurgerPane  from './components/BurgerPane'
import './App.css';
import React, {Component} from 'react'
export default class App extends Component {

  constructor() {
    super()
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      burgerArray: []
    }
  }

  moveToBurger = (item) => {
        const burgerItem = [...this.state.burgerArray]
        burgerItem.push(item)
        this.setState({burgerArray: burgerItem})
  }

  removeFromBurger = (e) => {
    this.setState({
      burgerArray: []
    })
  }

  render(){
     return (
    <div>
      <div className="ingredients">
        <IngredientList ingredients={this.state.ingredients} moveToBurger={this.moveToBurger}/>
      </div>
      <div className="burger">
        <BurgerPane burgerItem={this.state.burgerArray} removeFromBurger={this.removeFromBurger}/>
      </div>
    </div>
  );
}
}
