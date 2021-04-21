import * as bodyParser from "body-parser";
import * as express from "express";
import IAppDependency from "./config/dependencies";
import {AppError} from "./frameworks/common/exceptions/AppError";
import ErrorHandler from "./frameworks/common/exceptions/ErrorHandler";
import routes from "./frameworks/web/routes";

const app = express()

const application = (dependencies: IAppDependency) => {

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.use('/v1', routes(dependencies))

    // Exception
    app.all('*', (req: express.Request, _: express.Response, next: express.NextFunction) => {
        next(new AppError(`Could not find ${req.originalUrl}`, 404))
    })

    app.use(ErrorHandler)

    return app
}


export default application