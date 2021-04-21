import Event from "../../entities/Event";
import Pagination from "../../entities/Pagination";
import EventRepository from "../contracts/EventRepository";

const GetAllEvent =  (eventRepository: EventRepository) => {
    async function Execute(page: number, size: number, ): Promise<Pagination<Event>> {
        const m = await eventRepository.getAll(page, size)
        return Event.fromModelPagination(m)
    }
    return { Execute }
}

export default GetAllEvent;