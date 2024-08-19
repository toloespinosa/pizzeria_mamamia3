import React from 'react';
import { pizzas } from './pizzas.js';
import CardPizza from './CardPizza';


const Home = () => {
  return (
    <div>
      <header className="header-background">
        <div className="header-overlay">
          <div className="header-content">
            <h3>Bienvenido a Nuestro Menú de Pizzas</h3>
          </div>
        </div>
      </header>
      <div className="home">
        <h2>Menú de Pizzas</h2>
        <div className="pizza-cards">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              image={pizza.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
