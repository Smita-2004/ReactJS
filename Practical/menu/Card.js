import React from 'react';

const PizzaCard = ({ name }) => <div>🍕 Pizza: {name}</div>;
const BurgerCard = ({ name }) => <div>🍔 Burger: {name}</div>;
const SaladCard = ({ name }) => <div>🥗 Salad: {name}</div>;
const NotFoundCard = ({ name }) => <div>❓ Unknown Item: {name}</div>;

export { PizzaCard, BurgerCard, SaladCard, NotFoundCard };
