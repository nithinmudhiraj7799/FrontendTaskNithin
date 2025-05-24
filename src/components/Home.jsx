import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Home Page
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Welcome to the homepage! We're glad to have you here.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
