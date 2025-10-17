import React from 'react';
import { Link } from 'react-router';

const ProductsCart = ({ product }) => {
    const { bookName, image, author, category, bookId } = product;
    return (
      <div className="card bg-base-100 border shadow-sm transition hover:scale-y-105 duration-300 ease-in-out">
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
          <button className="btn w-20">{category}</button>
          <div className="card-actions justify-end">
                    <Link to={`/products/${bookId}`} className="btn btn-outline">
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ProductsCart;