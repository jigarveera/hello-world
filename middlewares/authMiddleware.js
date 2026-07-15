import dotenv from 'dotenv';
dotenv.config();

const BEARER_TOKEN = process.env.BEARER_TOKEN;

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized user"
        })
    }

    if (token !== BEARER_TOKEN) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized user"
        })
    }

    next();
}