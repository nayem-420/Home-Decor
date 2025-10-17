import React from 'react';
import { Link, useParams } from 'react-router';
import { useProducts } from '../../hooks/useProducts';
import LoadingSpinner from '../LoadingSpinner';

const ProductDetails = () => {
    const { bookId } = useParams();
    const { products, loading } = useProducts();
    const product = products.find(p => String(p.bookId) === bookId)
    if (loading) return <LoadingSpinner></LoadingSpinner>

    const handleAddToWishList = () => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updateList = [];
        if (existingList) {
            const isDuplicate = existingList.some(p => p.bookId === product.bookId)
            if (isDuplicate) return alert("Already Exists");
            updateList = [...existingList, product];
        } else {
            updateList.push(product);
        }
        localStorage.setItem('wishlist', JSON.stringify(updateList));
    }
    const { image, bookName, review, } = product;
    
    return (
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="lg:w-[300px] lg:h-[400px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title">{bookName}</h2>
          <p>{review}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToWishList}
              to="/wishlist"
              className="btn btn-primary"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;