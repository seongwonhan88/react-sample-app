import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let trsIngredients = Object.keys(props.ingredients) // Object.keys: turns obj -> arr
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            }); // [dynamic expansion based on obj value]
        })
        .reduce((arr, el) => { // flatten array
            return arr.concat(el)
        }, []);

    if (trsIngredients.length === 0) {
        trsIngredients = <p>Start adding ingredients!</p>;
    }
   
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {trsIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;