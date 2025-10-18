import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const WishList = () => {
    const [wishlist, setWishlist] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');
    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem("wishlist"));
        if (saveList) setWishlist(saveList);
    }, [])
  
  if(!wishlist.length) return <h1 className='font-bold text-4xl text-center'>No Data Available</h1>

    const sortedItem = (() => {
      if (sortOrder === "price-asc")
        return [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
      else if (sortOrder === "price-dsc")
        return [...wishlist].sort((a, b) => b.totalPages - a.totalPages);
      else return wishlist;
    })();

  const handleRemove = (bookId) => {
    const existingList = JSON.parse(localStorage.getItem('wishlist'));
    let updateList = existingList.filter(p => p.bookId !== bookId)
    setWishlist(updateList);
    localStorage.setItem('wishlist', JSON.stringify(updateList));
  }
    return (
      <div>
        <title>Home-Decor WishList</title>
        <div className="flex items-center justify-between space-y-5">
          <h1 className="text-3xl font-bold">
            Wish List{" "}
            <span className="text-sm text-gray-600">
              ({sortedItem.length}) added
            </span>
          </h1>
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Default</option>
            <option value="price-asc">Low → High</option>
            <option value="price-dsc">High → Low</option>
          </select>
        </div>
        <div className="space-y-3">
          {sortedItem.map((p) => (
            <div
              key={p.bookId}
              className="card lg:card-side bg-base-100 shadow-sm"
            >
              <figure>
                <img
                  className="lg:w-40 lg:h-28 object-cover"
                  src={p.image}
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p.bookName}</h2>
                <p>{p.totalPages}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      handleRemove(p.bookId);
                    }}
                    className="btn btn-primary"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='space-y-5'>
          <h3 className="font-bold text-2xl text-green-600 text-center">
            Wish List Bar Chart
          </h3>
          <div className="bg-base-100 rounded-2xl p-4 h-80">
            <BarChart width={730} height={250} data={wishlist}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="totalPages" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalPages" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    );
};

export default WishList;