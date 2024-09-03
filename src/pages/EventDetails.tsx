import { useParams } from 'react-router';
import { useEvent } from '../supabase/EventService';
import EventCard from '../components/EventCard';


const EventDetailsPage = () => {
  const { eventId } = useParams<{ eventId: string }>();

  console.log(eventId)

  const { 
    query: { 
      data: event, 
      isLoading,
      isError,
      isSuccess,
      error
    } 
  } = useEvent(eventId);

  if (isLoading) {
    return <p>Loading</p>
  } else if (isError) {
    return <p>{ error ? error.stack ?? error.message : "unknown" }</p>
  } else if (isSuccess && event) {
    return <EventCard event={event}/>
  } else {
    return <p>unsuccessful, no error</p>
  }
};

export default EventDetailsPage;



