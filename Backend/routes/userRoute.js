import express from 'express';

import { generateToken, getToken, isAuth } from '../util';
import shop_Books from '../shop_Books';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/userModel';

const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");
const {check, validationResult} = require("express-validator");
//const config = require('config');
const auth = require('../middleware/auth');

const userRouter = express.Router();
dotenv.config()
/*
router.post("/signin", expressAsyncHandler(async(req, res) => { 

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(user){
        res.send({
           _id:user._id,
           name:user.name,
            email:user.email,
           isAdmin:user.isAdmin,
           token: getToken(user)
        })

    }else{
        res.status(401).send({msg: 'Invalid Email or Password.'});
    }
}))
*/
/*
router.post('/register', async(req, res) => { 
const user = new User({
    name: req.body.name,
    email: req.body.Email,
    password: req.body.password
});
    const newUser = await user.save();
    if(newUser){
        res.send({
        _id: newUser.id,
        name: newUser.name,
         email: newUser.Email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser)
    })}

 else{
        res.status(401).send({msg: 'Invalid User Data.'});
    }
})
*/
/*router.get("/createadmin", async(req, res) =>{
    try {
        const user = new User({
            _id: user.id,
            name: 'Sagamart',
            email: 'sagamart01@gmail.com',
            password: '123',
            isAdmin: true,
            token: getToken(user)
        });
     
    
    const newUser = await user.save();
    res.send(newUser);
    } catch (error) {
        res.send({msg: error.message}) 
    }
   
});*/

userRouter.get("/seed", expressAsyncHandler(async (req, res) =>
{
  //await User.remove({});
    const createdUsers = await User.insertMany(shop_Books.users)
    res.send({createdUsers});
}));


userRouter.post('/signin', expressAsyncHandler(async(req, res) => { 
    const user = await User.findOne({
        email: req.body.email }); 
     if(user){
        if(req.body.password, user.password){
            res.send({
               _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
         }  
 }
 else
    { res.status(401).send({message: 'Invalid email or password'});}
    }
));   


userRouter.get('/signin', async(req, res) =>{
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
       
    });

    if(user){
       req.send({
        email: user.email,
        password: user.password,
        name: user.name
       })
    }
})

userRouter.post('/register', async(req, res) => { 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
        const createdUser = await user.save();
          
            res.send({
            _id: createdUser.id,
            name: createdUser.name,
             email: createdUser.Email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(createdUser)
        })
    
    })  
/*
 userRouter.get('/', auth, async (req, res) =>{
     try {
         const user = await User.findById(req.user.id).select('-password')
         res.json(user)
         
     } catch (error) {  
        console.log(error.message);
        return res.status(500).json({msg: "Server dsd Error..."});
     }
 })   

userRouter.post('/register', [
    check('email', 'Email is required').isEmail(), 
    check('password','Password is required').not().isEmpty(),
    
],async(req,res)=>{
   try {
      let {email, password} = req.body;
       let user = await User.findOne({  
           email
       });
       const errors = validationResult(req);
       if(!errors.isEmpty()){
           return res.status(401).json({errors: errors.array()});
       }
       if(user){
           return res.status(401).json({msg: "There is user with this email"})
       }
       const salt = await bcryptjs.genSalt(9);
       password = await bcryptjs.hash(password,salt);
       user = new User({
           email,
           password,
         
       })
       await user.save();

       const payload ={
           user:{
               id: user.id
           }
       }
       const toke = generateToken(process.env.JWT_SECRET);
       jwt.sign(
           payload,
            toke
        , 
    
          (err,token) => {
              if(err) throw err;
              res.json({token});
          }
              
          
       )
     // const token = generateToken(user);
      // res.json(token);
       
   } catch (error) {
       console.log(error.message);
       return res.status(500).json({msg: "server1 Error..."});
   }
})
*/
userRouter.post('/login',[
    check('email', 'Email is required').isEmail(), 
    check('password','Password is required').not().isEmpty()
], async (req,res) =>{
    try {
        const {email, password} = req.body;
        const errors = validationResult(req);
        let user = await User.findOne({email});
        
        
        if(!errors.isEmpty()){
            return res.status(401).json({errors: errors.array()});
        }

        if(!user){
            return res.status(401).json({msg: "No user with this email"});
        }

        let isPasswordMatch = await bcryptjs.compare(password,user.password);
        if(isPasswordMatch){
            const token = generateToken(user);
            res.json(token);
        }
        else return res.status(401).json({msg: "Invalid Password"});

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg: "server Error..."});
    }
})


export default userRouter;
