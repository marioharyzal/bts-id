import jwt from "jsonwebtoken";

export const authorization = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    if (token === null) {
        return res.status(403).json({
            status: 403,
            message: "Forbidden",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!decoded)
            return res.status(403).json({
                status: 403,
                message: "Forbidden",
            });
        req.username = decoded.username;
        next();
    } catch (error) {
        res.status(403).json({
            status: 403,
            message: "Forbidden",
        });
    }
};
