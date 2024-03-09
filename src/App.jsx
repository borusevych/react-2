import './App.css';
import Button from './components/Button.jsx';
import Modal from './components/Modal.jsx';
import ProductCard from './components/ProductCard.jsx';
import { useState, useEffect } from "react"
import useLocalStorage from './components/useLocalStorage.js';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error loading products:', error));
  }, []);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToCart = (product) => {
    if (cartItems.includes(product)) {
      setCartItems(prevCartItems => prevCartItems.filter(id => id !== product));
    } else {
      setCartItems(prevCartItems => [...prevCartItems, product]);
    }
  };

  const handleToggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(prevFavorites => prevFavorites.filter(id => id !== productId));
    } else {
      setFavorites(prevFavorites => [...prevFavorites, productId]);
    }
  };

  return (
    <div>
      <div className="header">
        <Button>Кошик ({cartItems.length})</Button>
        <Button>Обране ({favorites.length})</Button>
      </div>
      
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favorites.includes(product.id)}
            isInCart={cartItems.includes(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;