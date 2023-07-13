import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './styles.css';
import Camisa_Cruzeiro from './images/Camisa_Cruzeiro.jpg.jpg';
import Camisa_Bayern_de_Munich from './images/Camisa_Bayern_de_Munich.jpg.jpeg';
import Camisa_RealMadrid from './images/Camisa_RealMadrid.jpg';
import Camisa_Barcelona from './images/Camisa_Barcelona.jpeg';
import Camisa_Psg from './images/Camisa_Psg.webp';
import Camisa_Chelsea from './images/Camisa_Chelsea.webp';

const ProductCard = ({ id, image, name, price, addToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>R${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

const ProductList = ({ addToCart }) => {
  const products = [
    
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

const CartItem = ({ id, image, name, price, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>R${price}</p>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          <h2>Shopping Cart</h2>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              removeFromCart={removeFromCart}
            />
          ))}
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    
  ];

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setCartItems([...cartItems, productToAdd]);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">My Cart</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/">
          <h1>Camisetas de Times</h1>
          <ProductList addToCart={addToCart} />
        </Route>

        <Route path="/cart">
          <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
