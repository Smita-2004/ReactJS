import React from 'react';
import { PizzaCard, BurgerCard, SaladCard, NotFoundCard } from './Card';

function Menu({ items }) {
  return (
    <div>
      {items.map((item, index) => {
        switch (item.type.toLowerCase()) {
          case 'pizza':
            return <PizzaCard key={index} name={item.name} />;
          case 'burger':
            return <BurgerCard key={index} name={item.name} />;
          case 'salad':
            return <SaladCard key={index} name={item.name} />;
          default:
            return <NotFoundCard key={index} name={item.name} />;
        }
      })}
    </div>
  );
}

export default Menu;
