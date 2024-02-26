import e from 'express'
import user from '../model/schema.js';

export const getUsers = async (req, res) => {
    try {
        const users = await user.find();

        res.status(200).json({all_users : users});
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const getUser = async (req, res) => {
    const {email_id} = req.query;
    try {
        const users = await user.find({email_id : email_id});

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const createUser = async (req, res) => {
    const data = req.body;
    // console.log(data);
    const newUser = new user(data);

    try {
        await newUser.save();
        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}