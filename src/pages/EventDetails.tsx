import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { EventModel } from '../models/Event';


const EventDetails = () => {
  const { id } = useParams();

  /* TODO: implement API interactions with useMutation */
  const [event, setEvent] = useState<EventModel|null|undefined>(null);

  async function fetchEvent(_id: string): Promise<EventModel> {
    return supabase
      .from("events")
      .select()
      .eq("id", _id)
      .then(({ data: _body, }) => {
        if (_body) {
          return { ...(_body[0] ?? {}) };
        }
      });
  }

  useEffect(() => {
    if (id) {
      fetchEvent(id).then(setEvent);
    } else {
      /* TODO: handle 404 */
    }
  }, [id]);

  if (event) {
    return (
      <div className="p-4">
        <div className="mt-4">
          <h2 className="text-3xl font-bold">{ event.title }</h2>
          <p className="text-gray-600">{ event.host }</p>
          <p className="text-gray-600">{ event.date.toLocaleString() }</p>
          <p className="text-gray-600">{ event.location }</p>
  
          <h3 className="mt-4 text-2xl font-semibold">Description</h3>
          <p className="mt-2">{ event.description }</p>
  
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
      </div>
    );
  } else {
    return <p>404</p>
  }
  
};

export default EventDetails;



