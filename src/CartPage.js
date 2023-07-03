import React from 'react';
import './cart.css';

const CartPage = ({ cartItems, onHideCart, onRemoveItem }) => {
  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };

  return (
    <div className="cart-page">
      <h2>Meu Carrinho</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - R${item.price}
              <button onClick={() => handleRemoveItem(item.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
      <button onClick={onHideCart}>Página Principal</button>
    </div>
  );
};

export default CartPage;





