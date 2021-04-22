import {IEvent} from "../frameworks/persistance/database/EventRepository";
import Pagination from "./Pagination";

export default class Event {

    public static fromModel(m: IEvent): Event {
        const event = new Event()
        event.id = m.id
        event.eventType = m.event_type
        event.visitId = m.visit_id
        event.timestamp = m.timestamp
        event.caregiverId = m.caregiver_id
        event.careRecipientId = m.care_recipient_id
        event.taskInstanceId = m.task_instance_id
        event.note = m.note
        event.medicationFailureReason = m.medication_failure_reason

        return event

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
        public taskInstanceId: string = '',
        public eventType: string = '',
        public visitId: string = '',
        public note: string = '',
        public medicationFailureReason: string = '',
        public timestamp: string = '',
        public caregiverId: string = '',
        public careRecipientId: string = '',
    ) {
    }
}