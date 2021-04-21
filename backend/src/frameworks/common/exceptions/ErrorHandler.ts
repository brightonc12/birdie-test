import {NextFunction, Request, Response} from "express";
import {AppError} from "./AppError";

const ErrorHandler = (err: AppError | Error, _: Request<any>, res: Response, __: NextFunction) => {
    res.statusCode = (err instanceof AppError) ? err.status || 500 : 500;
    res.json({error: err.message});
}

export default ErrorHandler