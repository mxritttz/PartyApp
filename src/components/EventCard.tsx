import { EventData } from "../models/Event";

const img = "https://via.placeholder.com/400x100";

type EventCardProps = {
  event: EventData;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <img src={img} alt="Event Thumbnail" className="rounded-md w-full"/>
      <h2 className="mt-2 text-xl font-semibold">{ event.title }</h2>
      <p className="text-gray-600">{ event.host }</p>
      <p className="text-gray-600">{ event.date.toLocaleString() }</p>
      <p className="text-gray-600">{ event.location }</p>
      <p className="mt-2">{ event.description }</p>
    </div>
  )
}

export default EventCard;