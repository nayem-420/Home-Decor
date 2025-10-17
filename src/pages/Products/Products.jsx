import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductsCart from "../ProductsCart/ProductsCart";

const Products = () => {
  const [search, setSearch] = useState("");
  const { products } = useProducts();
  const term = search.trim().toLocaleLowerCase();
  const searchProduct = term
    ? products.filter((product) =>
        product.bookName.toLocaleLowerCase().includes(term)
      )
    : products;
  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <h1 className="font-bold text-3xl">
          All Products
          <span className="text-gray-500 text-lg">
            ({products.length}) are found{" "}
          </span>
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {searchProduct.map((product) => (
          <ProductsCart key={product.bookId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
