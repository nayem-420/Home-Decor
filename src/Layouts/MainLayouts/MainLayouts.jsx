import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="max-w-screen-xl w-full mx-auto px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default MainLayouts;