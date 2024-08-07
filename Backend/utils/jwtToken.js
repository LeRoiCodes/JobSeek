

export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000
        ),
        httpOnly: true,
        secure: true, // set to true if using HTTPS
        sameSite: 'None', // for cross-site requests
    }
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        message,
        token
    })
}