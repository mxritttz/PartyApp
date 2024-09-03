import { useForm } from "react-hook-form";
import { EventData } from "../../models/Event";
import { useNavigate, useParams } from "react-router";
import { useEvent, useEvents } from "../../supabase/EventService";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

type EventFormProps = {

}

const EventForm = ({}: EventFormProps) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const form = useForm<EventData>({
        defaultValues: {
            title: "",
            description: "",
            host: "",
            date: new Date(),
            location: "",
            metadata: null
        },
    });

    const { register, reset, formState: { errors } } = form;
    
    const { 
        query: { data: event }, 
        create, 
        update 
    } = useEvent(id);

    useEffect(() => {
        if (event) {
            reset({
                title: event.title,
                description: event.description,
                host: event.host,
                date: event.date,
                location: event.location,
                metadata: event.metadata
            });
        }
    }, 
    [reset, event]);

    const onSubmit = (formData: EventData) => {
        let mutation = event ? update : create;
        mutation(formData, {
            onSuccess: () => {
                queryClient.invalidateQueries(["events", "event"]);
                navigate(-1);
            },
        });
    };

    return (
      <form onSubmit={form.handleSubmit(onSubmit)}>
      </form>  
    );
}

export default EventForm;