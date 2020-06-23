import React from 'react';
import classes from './Order.module.css';

const order = ( props ) => {
    const ingredients = [];
    console.log("[Order] props.ingredients", props.ingredients);
    
    for( let ingredientName in props.ingredients ){
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }
    console.log("[Order] ingredients", ingredients);
    

    const ingredientOutput = ingredients.map( ig => {
        return <span 
                    style={{
                        textTransform: 'capitalize', 
                        display: 'inline-block',
                        margin: '0 8px',
                        border: '1px solid #CCC',
                        padding: '5px'
                    }}
                    key={ig.name}>{ig.name} ({ig.amount})</span>;
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price <strong>EUR {Number.parseFloat(props.price).toFixed(2)}</strong></p>
            {/* <p>Price <strong>EUR {props.price}</strong></p> */}
        </div>
    );
}

export default order;