const jwt = require('jsonwebtoken');

exports.authenticate = (req,res,next)=>{
    try {
        const {token} = req.headers;
        const secretKey = "Tier";
        const decoded = jwt.verify(token,secretKey);

        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({message:"Unauthorized error."});
    }
};