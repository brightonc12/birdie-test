import express = require('express');
import IAppDependency from "../../../config/dependencies";
import events from './events'


const apiRouter = (dependencies: IAppDependency) => {
    const routes = express.Router()

    const eventRouter = events(dependencies)

    routes.use('/events', eventRouter)
    return routes
}

export default apiRouter