import React from 'react';

const CardPizza = ({ name, ingredients, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>Precio: ${price}</p>
        <button className="add-to-cart-btn">Añadir al carro</button>

      </div>
    </div>
  );
};

export default CardPizza;
