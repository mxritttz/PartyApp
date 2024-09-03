import { MutateOptions, useMutation, useQuery } from "react-query";
import { EventData } from "../models/Event";
import { supabase } from "./client";
import { PostgrestResponse } from "@supabase/supabase-js";

function logResponse(response: PostgrestResponse<any>) {
    console.log("\n----------------\nget all events");
    console.log(`${response.status}: ${response.statusText}`);
    response.error ? 
        console.log(`Error ${response.error.code}:\n
            ${response.error.hint}\n
            ${response.error.message}\n
            ${response.error.details}\n
        `) : {}
    console.log(`Object count: ${response.count?.toString()}`);
    console.log("Data:");
    console.log(response.data);
}

function orThrow(response: PostgrestResponse<any>): any {
    if (response.error) { 
        throw new Error(`${response.error.code}: ${response.error.message}`);
    } else { 
        return response.data.length == 1 ? response.data[0] : response.data;
    }
}

class EventService {
    static async getAll(): Promise<EventData[]> {
        let response = await supabase.from("events").select("*");    
        logResponse(response);
        return orThrow(response);
    }
    static async getById(id: string): Promise<EventData> {
        let response = await supabase.from("events").select("*").eq("id", id);
        logResponse(response);
        return orThrow(response);
    }
    static async create(data: EventData): Promise<EventData|null> {
        let response = await supabase.from("events").insert([data]).select();
        logResponse(response);
        return orThrow(response);
    }
    static async update({ id, data }: { id: string, data: EventData }): Promise<EventData|null> {
        let response = await supabase.from("events").update(data).eq("id", id).select();
        logResponse(response);
        return orThrow(response);
    }
    static async delete(id: string): Promise<EventData|null> {
        let response = await supabase.from("events").delete().eq("id", id).select();
        logResponse(response);
        return orThrow(response);
    }
}

export const useEvent = (id?: string|undefined) => ({
    query: useQuery<EventData|null, Error>(
        ["event", id], 
        () => id ? EventService.getById(id) : null, 
        { retry: false }
    ),
    create: (data: EventData, opt: MutateOptions<EventData>) => 
        useMutation(EventService.create).mutate(data),
    update: (data: EventData, opt: MutateOptions<EventData>) => 
        id ? useMutation(EventService.update).mutate({ id, data }) : null,
    delete: (opt: MutateOptions<EventData|null, any, string, any>) => 
        id ? useMutation(EventService.delete).mutate(id, opt): null
});

export const useEvents = () => useQuery<EventData[], Error>(
    "events", 
    EventService.getAll, 
    { retry: false }
);