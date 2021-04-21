import {Pool} from "mysql2";
import EventRepository from "../../../../application/contracts/EventRepository";
import {AppError} from "../../../common/exceptions/AppError";
import {SqlQuery} from "../../../common/SqlQuery";
import SqlEventRepository from "../EventRepository";

jest.mock("../../../common/SqlQuery")

let eventRepo: EventRepository

beforeAll(async () => {
    eventRepo = new SqlEventRepository(jest.genMockFromModule<Pool>("mysql2"))
})

const event = {
    id: 'myId',
    payload: 'string',
    // tslint:disable-next-line:object-literal-sort-keys
    alert_id: 'string',
    task_instance_id: 'string',
    event_type: 'string',
    visit_id: 'string',
};

describe('event repository get by id', () => {

    it('should throw an app error when sql query is not an array ', async () => {
        (SqlQuery as jest.Mock).mockReturnValue({})
        const call = eventRepo.getById('myId')
        await expect(call).rejects.toThrow(AppError)
    })

    it('should throw an app error when sql query throws an error', async () => {
        (SqlQuery as jest.Mock).mockRejectedValue('Error')
        const call = eventRepo.getById('myId')
        await expect(call).rejects.toThrow(AppError)
    })

    it('should return event when event is found', async () => {
        (SqlQuery as jest.Mock).mockResolvedValueOnce({rows: [event]});

        const call = eventRepo.getById('myId')
        await expect(call).resolves.toEqual(event)
    })
})


describe('event repository get all', () => {
    const pageNum = 1;
    const pageSize = 3
    it('should throw an error when sql query is not an array ', async () => {
        (SqlQuery as jest.Mock).mockReturnValue({})
        const call = eventRepo.getAll(pageNum, pageSize)
        await expect(call).rejects.toThrow(Error)
    })

    it('should throw an app error when sql query throws an error', async () => {
        (SqlQuery as jest.Mock).mockRejectedValue('Error')
        const call = eventRepo.getAll(pageNum, pageSize)
        await expect(call).rejects.toThrow(AppError)
    })

    it('should return event when event is found', async () => {
        const getEvents = (size: number) => Array.from(Array(size), () => {
            return {...event}
        });

        (SqlQuery as jest.Mock).mockImplementation((_, sql: string) => {
            if (sql === 'SELECT COUNT(id) AS total FROM events') {
                return {rows: [{total: 5}]}
            }

            const str = sql.split('LIMIT')[1]
            const size = parseInt(str.substring(0, str.indexOf('OFFSET')).trim(), 10)

            return {rows: getEvents(size)}
        });

        const res = await eventRepo.getAll(pageNum, pageSize)
        expect(res.pageSize).toEqual(pageSize)
        expect(res.total).toEqual(5)
        expect(res.data.length).toEqual(pageSize)
    })
})