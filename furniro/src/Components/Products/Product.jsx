import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Product.css';

import { Link } from 'react-router-dom';


    const handleShare = async () => {
        if(navigator.share) {
            await navigator.share({
                title: 'My content',
                url: window.location.href
            });
        } else {
            await navigator.clipboard.writeText(window.location.href);
            alert('link copied');
        }
    }


const Product = ({ onAddToCart}) => {
       // Function to handle add to cart click
  const handleAddToCart = () => {
    onAddToCart();
}
const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

  // Fetch products when component loads
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products');
      setLoading(false);
    }
  };

   const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        // Refresh products list
        fetchProducts();
      } catch (err) {
        console.error('Error deleting product:', err);
        alert('Failed to delete product');
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

    return (
        <div className="container">
            <div className="header">
                <h1>Product Showcase</h1> 
            </div>
            <div className='user-conntainer'>
                {products.map((user) => (
                    <div className="product-card" key={user.id}>
                        <div className="product-image">
                            <img src={`http://localhost:5000${user.image_url}`} alt={user.name} />
                            <div className="overlay-text">
                                <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to cart</button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="product-title">{user.name}</h3>
                            <p className="product-brand">{user.description}</p>
                            <h3 className="product-price">${user.price}</h3>
                        </div>
                        {/* Overlay and Add to Cart removed as requested */}
                        <div className="action-buttons">
                            <div className="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>
                            <div className="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                </svg>
                            </div>
                            <div className="action-btn">
                                <svg onClick={handleShare} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>

                            </div>
                            <button 
                    className="action-icon delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    🗑️
                  </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='product-sell'>
               <Link to="/Sellproduct">
                <button className='product-button'>
                <h3>Sell your product</h3>
                </button>
                </Link>
                
            </div>
        </div>
    )
};

export default Product;