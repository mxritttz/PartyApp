import EventCard from "../components/EventCard";
import { useEvents } from "../supabase/EventService";

const HomeScreen = () => {
  const { 
    data: events, 
    isLoading, 
    isError, 
    isSuccess,
    error 
  } = useEvents();

  if (isLoading) {
    return <p>Loading</p>
  } else if (isError) {
    return <p>{ error ? error.stack ?? error.message : "unknown" }</p>
  } else if (isSuccess && events) {
    return (
      <div className="p-4">
        <div className="mt-4">
          { events?.map((event, index) => <EventCard key={index} event={event}/>) }
        </div>
      </div>
    );
  } 
  else return <p>unsuccessful, no error</p>;
};

export default HomeScreen;
