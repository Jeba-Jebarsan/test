import React from 'react';
    import { Link } from 'react-router-dom';
    import './App.css';

    const products = [
      {
        id: 1,
        name: 'Ultra HD Smart TV',
        imageUrl: 'https://images.unsplash.com/photo-1567696911980-2eed6957405c',
      },
      {
        id: 2,
        name: 'Wireless Noise-Cancelling Headphones',
        imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
      },
      {
        id: 3,
        name: 'Professional DSLR Camera',
        imageUrl: 'https://images.unsplash.com/photo-1580492516014-4a28466d55df',
      },
    ];

    function App() {
      return (
        <div className="app-container">
          <h1 className="app-title">Featured Products</h1>
          <div className="product-list">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-link">
                <div className="product-card">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                  />
                  <h2 className="product-name">{product.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    export default App;
