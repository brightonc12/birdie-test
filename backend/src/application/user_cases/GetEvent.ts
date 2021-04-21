import Event from "../../entities/Event";
import EventRepository from "../contracts/EventRepository";


const GetEvent = (eventRepository: EventRepository) => {
    async function Execute(eventId: string): Promise<Event> {
        const m = await eventRepository.getById(eventId)
        return Event.fromModel(m)
    }
    return { Execute }
}

export default GetEvent;