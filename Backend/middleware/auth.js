import jwt from 'jsonwebtoken';
//const jwt = require('jsonwebtoken');
//const config = require('config');
import { generateToken } from '../util'
import dotenv from 'dotenv';

dotenv.config();
module.exports = function (req, res, next) {
    try {
         const proceed = generateToken(process.env.JWT_SECRET);
        const token = req.header('x-auth-token');
        const verifiedUser = jwt.verify(
            token,
            proceed
    )
        req.user = verifiedUser.user;
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server12 Error..." })
    }
}