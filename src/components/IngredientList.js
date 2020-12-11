import React, {Component} from 'react';

export default class IngredientList extends Component {
    
    render() {
        const ingredientItem = this.props.ingredients.map((eachItem, index) => {
            return <div>
                        <li key={index}>{eachItem.name}</li><button onClick={() => this.props.moveToBurger(eachItem)}>Add to Burger</button>
                    </div>
        })

        return(
            <div>
                <h1>Ingredients</h1>
                {ingredientItem}
            </div>
        )   
    }
}