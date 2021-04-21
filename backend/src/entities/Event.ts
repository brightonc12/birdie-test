import {IEvent} from "../frameworks/persistance/database/EventRepository";
import Pagination from "./Pagination";

export default class Event {

    public static fromModel(m: IEvent): Event {
        return new Event(
            m.id,
            m.event_type,
            m.visit_id,
            m.timestamp,
            m.caregiver_id,
            m.care_recipient_id,
            m.mood,
        )
    }

    public static fromModelPagination(pagination: Pagination<IEvent>): Pagination<Event> {
        return new Pagination<Event>(
            pagination.pageCount,
            pagination.pageNum,
            pagination.pageSize,
            pagination.total,
            pagination.data?.map((value => Event.fromModel(value))) || []
        )
    }

    constructor(
        public id: string = '',
        // public payload: string = '',
        // public alertId: string = '',
        // public taskInstanceId: string = '',
        public eventType: string = '',
        public visitId: string = '',
        // public fluid: string = '',
        // public note: string = '',
        // public observed: string = '',
        // public media: string = '',
        // public taskDefinitionDescription: string = '',
        // public taskScheduleId: string = '',
        // public taskScheduleNote: string = '',
        // public taskDefinitionId: string = '',
        public timestamp: string = '',
        public caregiverId: string = '',
        public careRecipientId: string = '',
        public mood: string = '',
    ) {
    }
}