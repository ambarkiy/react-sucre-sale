import React from 'react';
import { MealViewer } from '../Meal/MealViewer';
import { MEALS as meals } from '../../custom';
import { ReactComponent as Pizza } from './pizza.svg';

const Pizzas = () => {
	const mealsElement = meals.map((meal) => (
		<MealViewer title={meal.title} ingredients={meal.ingredients} key={meal.id} prix={meal.prix}>
			<Pizza className='card-img-top' />
		</MealViewer>
	));
	return (
		<div className='container'>
			<div className='row'>{mealsElement}</div>
		</div>
	);
};

export default Pizzas;
