class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message),
        this.statusCode = statusCode
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (err.name === "CaseError"){
        const message = `Resource not found. Invalid ${eer.path}`
        err = new ErrorHandler(message, 400)
    }
    if (err.name === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message, 400)
    }
    if (err.name === "JsonwebTokenError"){
        const message = `Json web token is invalid, try again`
        err = new ErrorHandler(message, 400)
    }
    if (err.name === "TokenExpiredError"){
        const message = `Json web token is expired, try again`
        err = new ErrorHandler(message, 400)
    }
    return res.status(statusCode).json({
        success: false,
        message: err.message
    })

}

export default ErrorHandler