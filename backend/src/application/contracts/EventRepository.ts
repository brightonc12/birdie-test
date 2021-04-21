import Pagination from "../../entities/Pagination";
import {IEvent} from "../../frameworks/persistance/database/EventRepository";

export default abstract class EventRepository {
    public getById(_: string): Promise<IEvent> {
        throw new Error('Not Implemented')
    }

    public getAll(_: number, __: number): Promise<Pagination<IEvent>> {
        throw new Error('Not Implemented')
    }
}

