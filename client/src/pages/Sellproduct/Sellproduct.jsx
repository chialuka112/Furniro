import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Sellproduct.css';

const Sellproduct =  () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImageFile(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!imageFile || !productName || !productDescription || !productPrice) {
      setMessage('Please fill all fields and select an image');
      return;
    }

    setLoading(true);
    setMessage('');

    // Create FormData
    const formData =  new FormData();
    formData.append('image', imageFile);
    formData.append('name', productName);
    formData.append('description', productDescription);
    formData.append('price', productPrice);

    try {
      // Send data to backend
      const response = await axios.post('http://localhost:5000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage('Product created successfully!');
      
      // Wait 2 seconds then redirect to products page
      setTimeout(() => {
        navigate('/products');
      }, 2000);
      
    } catch (error) {
      console.error('Error creating product:', error);
      setMessage('Error creating product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-product-container">
      <div className="product-preview-card">
        <div className="preview-image-section">
          {selectedImage ? (
            <img src={selectedImage} alt="Product Preview" className="preview-img" />
          ) : (
            <div className="preview-placeholder">
              <p>No image selected</p>
            </div>
          )}
        </div>

        <div className="preview-details">
          <h2 className="preview-name">
            {productName || 'Product Name'}
          </h2>
          <p className="preview-desc">
            {productDescription || 'Product description'}
          </p>
          <h3 className="preview-price">
            ${productPrice || '0'}
          </h3>

          <div className="preview-actions">
            <button className="preview-btn">❤️</button>
            <button className="preview-btn">💰</button>
            <button className="preview-btn">🔗</button>
          </div>
        </div>
      </div>

      <div className="product-form-card">
        <h3>Create Product Card</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Image:</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
          </div>

          <div className="form-group">
            <label>Product Name:</label>
            <input 
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
              className="text-input"
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <input 
              type="text"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter description"
              className="text-input"
            />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input 
              type="number"
              step="0.01"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Enter price"
              className="text-input"
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'submit'}
          </button>

          {message && (
            <p className={message.includes('success') ? 'success-message' : 'error-message'}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Sellproduct;