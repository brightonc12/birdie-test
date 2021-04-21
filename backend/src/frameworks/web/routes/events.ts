import * as express from 'express';

import IAppDependency  from "../../../config/dependencies";
import eventController from '../../../controllers/events/EventController';

const eventsRouter = (dependencies: IAppDependency) => {
    const router = express.Router()

    const controller = eventController(dependencies)

    router.route('/:eventId')
        .get(controller.getEvent)

    router.route('/')
        .get(controller.getAllEvents)

    return router
}

export default eventsRouter