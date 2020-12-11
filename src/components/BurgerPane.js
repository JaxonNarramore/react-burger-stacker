import React, {Component} from 'react'

export default class BurgerPane extends Component{

    render() {
        const burgerChoice = this.props.burgerItem.map((eachItem, index) => {
            return <div>
                        <li key={index}>{eachItem.name}</li>
                    </div>
        })
        
        return(
        <div>
            <h1>Burger</h1>
            {burgerChoice}
            <button onClick={() => this.props.removeFromBurger()}>Clear Burger</button>
        </div>
        )
    }
}