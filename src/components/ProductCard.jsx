function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorite, isInCart }) {
  const handleAddToCartClick = () => {
    onAddToCart(product);
  };

  const handleToggleFavoriteClick = () => {
    onToggleFavorite(product.id);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3 className="product-card_header">{product.name}</h3>
      <p className="product-card_price">Ціна: {product.price} грн</p>
      <button onClick={handleAddToCartClick}>{isInCart ? 'В кошику' : 'Додати в кошик'}</button>
      <span className="product-card_favorite" onClick={handleToggleFavoriteClick}>
        {isFavorite ? 'В обраному ★' : 'В обране ☆'}
      </span>
    </div>
  );
}

export default ProductCard;