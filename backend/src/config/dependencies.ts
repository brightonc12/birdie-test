import {Pool} from "mysql2";
import EventRepository from "../application/contracts/EventRepository";
import SqlEventRepository from "../frameworks/persistance/database/EventRepository";

export interface IAppDependency {
    eventRepository: EventRepository
}

export const configDependency = ((pool: Pool): IAppDependency => {
    return {
        eventRepository: new SqlEventRepository(pool)
    }
})

export default class DependencyConfig {
    public eventRepository: EventRepository

    constructor(pool: Pool) {
        this.eventRepository = new SqlEventRepository(pool)
    }
}