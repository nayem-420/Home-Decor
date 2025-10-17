import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductsCart from "../ProductsCart/ProductsCart";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
    const products = useLoaderData();
    const data = useProducts();
    console.log(data);
    const featuredProducts = products.slice(0, 6);
    return (
      <div>
        <div className="flex items-center justify-between my-4">
          <h1 className="font-bold text-3xl">Featured Products</h1>
          <Link to="/products" className="btn btn-outline">
            See All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {featuredProducts.map((product) => (
            <ProductsCart key={product.bookId} product={product} />
          ))}
        </div>
      </div>
    );
};

export default Home;
