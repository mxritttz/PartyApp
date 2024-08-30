import BottomNavigation from '../components/BottomNavigation';


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

      <footer>
      <BottomNavigation />

      </footer>
    </div>
    
  );
};

export default HomeScreen;
