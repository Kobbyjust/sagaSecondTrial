//import { config } from 'dotenv/types';
import jwt from 'jsonwebtoken';
import config from './config';


/*const getToken = (user) =>{
    return jwt.sign({ 
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        
    }, config.JWT_SECRET,  {
        expiresIn: '48h'
    })
}*/

const generateToken = (user) =>{
    return jwt.sign({ 
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        
    },process.env.JWT_SECRET || 'somethingsecret' , {
        expiresIn: '30d'
    })
}

/*const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if(authorization){
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, config.JWT_SECRET, (err, decode) =>{
            if(err){
                res.status(401).send( {msg: 'Invalid Token'});
            }else{
                req.user = decode;
                next();
            } 
        });
       
    } else{
        res.status(401).send({msg: "Token is not supplied."})
    }
  
};*/

export const isAdmin = (req, res, next) =>{
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401).send({msg: "Invalid Admin."})
    }
}



/*
const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) =>{
            if(err){
                return res.status(401).send( {msg: 'Invalid Token'});
            }
            req.user = token;
            next();
            return
        })
    }
    return res.status(401).send({msg: "Token is not supplied."})
}

const isAdmin = (req, res, next) =>{
    if(req.user && req.user.isAdmin){
        return next();
    }
    return res.status(401).send({msg: 'Admin Token is not valid.'})
}*/
const isAuth = (req, res, next) =>{
  try {
    
      const token = req.header('x-auth-token');
      const verifiedUser = jwt.verify(
          token, 
          config.JWT_SECRET
      )
        req.user = verifiedUser.user;
        next();
  } catch (error) {
      console.log(error.message);
      return res.status(500).json({msg: "Server Error..."});
  }
}

export {generateToken, isAuth} 