import React, { useState } from 'react';
import { FaComment, FaUser } from 'react-icons/fa';
import './styles.css';
import CartPage from './CartPage';
import ChatScreen from './ChatScreen';
import ProfilePage from './ProfilePage';
import Camisa_Cruzeiro from './images/Camisa_Cruzeiro.jpg.jpg';
import Camisa_Bayern_de_Munich from './images/Camisa_Bayern_de_Munich.jpg.jpeg';
import Camisa_RealMadrid from './images/Camisa_RealMadrid.jpg';
import Camisa_Barcelona from './images/Camisa_Barcelona.jpeg';
import Camisa_Psg from './images/Camisa_Psg.webp';
import Camisa_Chelsea from './images/Camisa_Chelsea.webp';

const ProductCard = ({ product, addToCart }) => {
  const { id, image, name, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>R${price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
};

const ProductList = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Camisa Cruzeiro',
      price: 250.00,
      image: Camisa_Cruzeiro,
    },
    {
      id: 2,
      name: 'Camisa Bayern de Munich',
      price: 250.00,
      image: Camisa_Bayern_de_Munich,
    },
    {
      id: 3,
      name: 'Camisa Real Madrid',
      price: 250.00,
      image: Camisa_RealMadrid,
    },
    {
      id: 4,
      name: 'Camisa Barcelona',
      price: 250.00,
      image: Camisa_Barcelona,
    },
    {
      id: 5,
      name: 'Camisa PSG',
      price: 250.00,
      image: Camisa_Psg,
    },
    {
      id: 6,
      name: 'Camisa Chelsea',
      price: 250.00,
      image: Camisa_Chelsea,
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleViewCart = () => {
    setShowCart(true);
    setShowProfile(false);
    setShowChat(false);
  };

  const handleHideCart = () => {
    setShowCart(false);
  };

  const handleSupportClick = () => {
    setShowChat(true);
    setShowProfile(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowCart(false);
    setShowChat(false);
  };

  const handleGoBack = () => {
    setShowProfile(false);
  };

  return (
    <div className="app">
      <h1>Camisas de Times</h1>
      {!showCart && !showProfile && (
        <>
          <ProductList addToCart={addToCart} />
          <button onClick={handleViewCart}>Meu Carrinho</button>
        </>
      )}

      {showCart && (
        <CartPage
          cartItems={cartItems}
          onHideCart={handleHideCart}
          onRemoveItem={removeFromCart}
        />
      )}

      {showProfile && (
        <ProfilePage onGoBack={handleGoBack} onViewCart={handleViewCart} />
      )}

      {showChat && <ChatScreen onHideChat={() => setShowChat(false)} />}

      <button className="support-button" onClick={handleSupportClick}>
        <FaComment className="support-icon" />
      </button>

      <button className="profile-button" onClick={handleProfileClick}>
        <FaUser className="profile-icon" />
        Perfil
      </button>
    </div>
  );
};

export default App;













