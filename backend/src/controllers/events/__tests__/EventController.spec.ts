import {Express} from "express";
import {Pool} from "mysql2";
// tslint:disable-next-line:no-implicit-dependencies
import * as request from "supertest";
import app from "../../../application";
import DependencyConfig from "../../../config/dependencies";
import {AppError} from "../../../frameworks/common/exceptions/AppError";


jest.mock("../../../frameworks/persistance/database/EventRepository")

let server: Express
const dep = new DependencyConfig(jest.genMockFromModule<Pool>("mysql2"))
beforeAll(async () => {
    server = app(dep)
})

describe('Event Controller fetch all events ', () => {
    const endPoint = '/v1/events'

    it('should return 200 on success', async () => {
        (dep.eventRepository.getAll as jest.Mock).mockReturnValue([])
        await request(server)
            .get(endPoint)
            .expect(200);
    })

    it('should return 500 when error is unknown', async () => {
        (dep.eventRepository.getAll as jest.Mock).mockRejectedValue(new Error)
        await request(server)
            .get(endPoint)
            .expect(500);
    })

    it('should return same status error thrown from the event getAll', async () => {
        (dep.eventRepository.getAll as jest.Mock).mockRejectedValue(new AppError('', 404))
        await request(server)
            .get(endPoint)
            .expect(404);
    })
});


describe('Event Controller fetch event', () => {
    const endPoint = '/v1/events/39903kd2'


    it('should return 200 on success', async () => {
        (dep.eventRepository.getById as jest.Mock).mockReturnValue({})
        await request(server)
            .get(endPoint)
            .expect(200);
    })

    it('should return 500 when error is unknown', async () => {
        (dep.eventRepository.getById as jest.Mock).mockRejectedValue(new Error)
        await request(server)
            .get(endPoint)
            .expect(500);
    })

    it('should return same status error thrown', async () => {
        (dep.eventRepository.getById as jest.Mock).mockRejectedValue(new AppError('', 404))
        await request(server)
            .get(endPoint)
            .expect(404);
    })

    it('should return 200 on fetch single event', async () => {
        (dep.eventRepository.getById as jest.Mock).mockReturnValue({})
        await request(server)
            .get(endPoint)
            .expect(200);
    })
})

