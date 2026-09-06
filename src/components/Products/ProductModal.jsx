import React, { useEffect } from 'react';
import { waLink } from '../../data/content.js';
import { buyMessage } from './Products.jsx';
import './ProductModal.css';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const closeOutside = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="product-modal-overlay" onClick={closeOutside}>
      <div className="product-modal">
        <button className="product-modal-close" onClick={onClose}>✕</button>
        <div className="pm-photo">
          <img src={product.photo} alt={product.name} className="pm-img" />
        </div>
        <div className="pm-body">
          <div className="pm-name">{product.name}</div>
          <div className="pm-price">{product.price}</div>
          <p className="pm-desc">{product.description}</p>
          <a 
            href={waLink(buyMessage(product))}
            target="_blank"
            rel="noreferrer"
            className="btn-buy"
          >
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
}