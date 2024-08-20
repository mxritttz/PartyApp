import React from "react";

const HomeScreen = () => {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">PartyPal</h1>
        <div className="space-x-4">
          <button>
            <img src="/icons/menu.svg" alt="Menu" />
          </button>
          <button>
            <img src="/icons/search.svg" alt="Search" />
          </button>
        </div>
      </header>

      <div className="mt-4">
        {/* Event Cards */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Event Thumbnail"
            className="rounded-md w-full"
          />
          <h2 className="mt-2 text-xl font-semibold">Beach Bash</h2>
          <p className="text-gray-600">Hosted by: Jane Smith</p>
          <p className="text-gray-600">Date: July 22, 2023</p>
          <p className="text-gray-600">Location: Malibu Beach</p>
          <p className="mt-2">Join us for an unforgettable beach party...</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Event Thumbnail"
            className="rounded-md w-full"
          />
          <h2 className="mt-2 text-xl font-semibold">Summer Festival</h2>
          <p className="text-gray-600">Hosted by: Emma Brown</p>
          <p className="text-gray-600">Date: September 10, 2023</p>
          <p className="text-gray-600">Location: Central Park</p>
          <p className="mt-2">Enjoy a day of fun with food stalls, live...</p>
        </div>
      </div>

      <footer className="flex justify-around items-center bg-white p-4 shadow-md fixed bottom-0 w-full">
        <button className="text-pink-500">
          <img src="/icons/home.svg" alt="Home" />
        </button>
        <button>
          <img src="/icons/map.svg" alt="Map" />
        </button>
        <button>
          <img src="/icons/profile.svg" alt="Profile" />
        </button>
      </footer>
    </div>
  );
};

export default HomeScreen;
