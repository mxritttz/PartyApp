

import React from "react";
import BottomNavigation from './../components/BottomNavigation';


const EventDetailScreen = () => {
  return (
    <div className="p-4">
      <header className="flex items-center p-4 bg-white shadow-md">
        <button>
          <img src="/icons/back.svg" alt="Back" />
        </button>
        <h1 className="ml-4 text-2xl font-bold">PartyPal</h1>
      </header>

      <div className="mt-4">
        <h2 className="text-3xl font-bold">Summer Bash 2023</h2>
        <p className="text-gray-600">Hosted by: Emily Johnson</p>
        <p className="text-gray-600">Date: July 22, 2023</p>
        <p className="text-gray-600">Location: Sunset Beach, CA</p>

        <h3 className="mt-4 text-2xl font-semibold">Description</h3>
        <p className="mt-2">
          Join us for an unforgettable summer bash with great music, food, and
          company...
        </p>

        <h3 className="mt-4 text-2xl font-semibold">Media</h3>
        <div className="flex space-x-4 mt-2">
          <img
            src="https://via.placeholder.com/150"
            alt="Event Media 1"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Event Media 2"
            className="rounded-lg"
          />
        </div>

        <h3 className="mt-4 text-2xl font-semibold">Special Benefits</h3>
        <p className="mt-2">
          Free entry codes for the first 50 attendees! Use code SUMMER23...
        </p>

        <div className="flex mt-4 space-x-4">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">
            RSVP
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
            More Info
          </button>
        </div>
      </div>
      <footer>
      <footer >
      <BottomNavigation />

      </footer>
      </footer>
    </div>
  );
};

export default EventDetailScreen;



