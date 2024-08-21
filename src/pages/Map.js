
import React from "react";
import BottomNavigation from './../components/BottomNavigation';


const MapScreen = () => {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">PartyPal</h1>
        <div className="space-x-4">
          <button className="bg-gray-200 p-2 rounded-lg">Date</button>
          <button className="bg-gray-200 p-2 rounded-lg">Features</button>
        </div>
      </header>

      <div className="mt-4">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Map"
          className="w-full rounded-lg shadow-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold">House Party</h2>
          <p className="text-gray-600">Today, Linked Street</p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg mt-2">
            More Info
          </button>
        </div>
      </div>

      <footer >
      <BottomNavigation />

      </footer>
    </div>
  );
};

export default MapScreen;




