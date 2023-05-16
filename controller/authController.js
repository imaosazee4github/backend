import Users from '../models/userModels.js';
import bcrypt from 'bcryptjs';
import {createError} from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async(req,res,next) => {
try{
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(req.body.password, salt);
    const newUser = new Users({
        username: req.body.username,
        email: req.body.email,
        password:hashed,
    })
    await newUser.save()
    res.status(200).send("User has been registered successfully!")

}catch(err){
   next(err)
}}


export const login = async(req,res,next) => {
    try{
        const user = await Users.findOne({username:req.body.username})

        if(!user) return next(createError(404, "User or Password not found."))
        

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password) 
        if(!isPasswordValid) return next(createError(404, "Password or user not found."))

        const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin},process.env.JWT, {expiresIn:"5d"})

        const { password, isAdmin, ...otherDetails } = user._doc;
    
        res.cookie("access_token", token,{
            httpOnly:true,
        })
        .status(200)
        .json({...otherDetails})
    
    }catch(err){
        next(err)
    }}