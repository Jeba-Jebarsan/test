import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
    import './ProductPage.css';

    const productDetails = {
      1: {
        name: 'Ultra HD Smart TV',
        imageUrl: 'https://images.unsplash.com/photo-1567696911980-2eed6957405c',
        description:
          'Experience stunning visuals with this 4K Ultra HD Smart TV. Enjoy your favorite shows and movies in lifelike clarity.',
        price: '$599.99',
        features: ['4K Ultra HD Resolution', 'Smart TV with Streaming Apps', 'HDR Support', 'Multiple HDMI Ports'],
      },
      2: {
        name: 'Wireless Noise-Cancelling Headphones',
        imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
        description:
          'Immerse yourself in your music with these premium wireless headphones. Active noise cancellation ensures a pure audio experience.',
        price: '$249.99',
        features: ['Active Noise Cancellation', 'Bluetooth 5.0', '30-Hour Battery Life', 'Comfortable Over-Ear Design'],
      },
      3: {
        name: 'Professional DSLR Camera',
        imageUrl: 'https://images.unsplash.com/photo-1580492516014-4a28466d55df',
        description:
          'Capture the world in stunning detail with this professional DSLR camera. Perfect for photographers of all levels.',
        price: '$899.99',
        features: ['24.2MP APS-C Sensor', '4K Video Recording', 'Fast Autofocus System', 'Interchangeable Lens Mount'],
      },
    };

    function ProductPage() {
      const { id } = useParams();
      const [product, setProduct] = useState(null);

      useEffect(() => {
        const selectedProduct = productDetails[id];
        setProduct(selectedProduct);
      }, [id]);

      if (!product) {
        return <div className="loading">Loading...</div>;
      }

      return (
        <div className="product-page">
          <div className="product-image-container">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
          </div>
          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <ul className="product-features">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      );
    }

    export default ProductPage;
