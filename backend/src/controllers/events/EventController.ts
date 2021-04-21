import {NextFunction, Request, Response} from 'express'
import GetAllEvents from '../../application/user_cases/GetAllEvents'
import GetEvent from '../../application/user_cases/GetEvent'
import IAppDependency from "../../config/dependencies";
import {AppError} from "../../frameworks/common/exceptions/AppError";

const eventController = (dependencies: IAppDependency) => {
    const {eventRepository} = dependencies

    const getAllEvents = (req: Request<any>, res: Response, next: NextFunction) => {
        const GetAllEventQuery = GetAllEvents(eventRepository)

        const {size, page} = req.query


        const sizeNum = parseInt(size as string, 10) || 0
        const pageNum = parseInt(page as string, 10) || 0

        GetAllEventQuery.Execute(pageNum, sizeNum).then((events) => {
            res.json(events)
        }, (err) => {
            next(err)
        })
    }
    const getEvent = (req: Request<any>, res: Response, next: NextFunction) => {
        const GetEventQuery = GetEvent(eventRepository)

        const {eventId} = req.params

        if (!eventId) {
            throw new AppError('invalid event id', 400)
        }

        GetEventQuery.Execute(eventId).then((event) => {
            res.json(event)
        }, (err) => {
            next(err)
        })
    }

    return {
        getAllEvents,
        getEvent,
    }
}

export default eventController


