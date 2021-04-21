import {Pool} from 'mysql2'
import EventRepository from "../../../application/contracts/EventRepository";
import Pagination from "../../../entities/Pagination";
import {AppError} from '../../common/exceptions/AppError';
import {SqlQuery} from '../../common/SqlQuery';

interface ITextRow {
    total: number
}


export interface IEvent {
    id: string,
    payload: string,
    alertId: string,
    task_instance_id: string,
    event_type: string,
    visit_id: string,
    fluid: string,
    note: string,
    observed: string,
    media: string,
    task_definition_description: string,
    task_schedule_id: string,
    task_schedule_note: string,
    task_definition_id: string,
    timestamp: string,
    caregiver_id: string,
    care_recipient_id: string,
    mood: string,
}

export default class SqlEventRepository implements EventRepository {
    private readonly pool: any

    constructor(pool: Pool) {
        this.pool = pool;
    }

    public async getById(eventId: string): Promise<IEvent> {
        try {
            const res = await SqlQuery(this.pool, `SELECT * FROM events WHERE id=${eventId} LIMIT 1`)
            if (!(res.rows instanceof Array)) {
                throw Error
            }
            return res.rows[0] as IEvent
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e)
            throw new AppError('Event not found', 404)
        }
    }

    public async getAll( page: number = 1, size: number = 0,): Promise<Pagination<IEvent>> {
        let total: number = 0
        let offset: number = 0

        if (size > 50) {
            size = 50
        }

        if (page <= 0) {
            size = 0
            offset = 0
        } else if (page > 1) {
            offset = ((page - 1) * size)
        }

        try {
            const res = await SqlQuery(this.pool, 'SELECT COUNT(id) AS total FROM events')
            if (!(res.rows instanceof Array)) {
                throw Error
            }

            total = (res.rows[0] as ITextRow)?.total || 0
            if (total > 0) {
                const result = await SqlQuery(this.pool, `SELECT * FROM events LIMIT ${size} OFFSET ${offset}`)

                if (!(result.rows instanceof Array)) {
                    return new Pagination<IEvent>()
                }
                const pageCount = Math.ceil(total / size)
                return new Pagination<IEvent>(pageCount, page, result.rows.length, total, result.rows as IEvent[])
            }
            return new Pagination<IEvent>()

        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e)
            throw new AppError('Failure fetch events', 500)
        }
    }
}