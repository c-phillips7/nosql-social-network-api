const res = require('express/lib/response');
const { User } = require('../models');

const userController = {
    //get all users
    getAllUser(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({_id:-1})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err))
    },

    //get user by id
    getUserbyId({ params }, res) {
        User.findOne({_id:params.id})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData) return res.status(404).json({message: 'No user with this id'})
            res.json(dbUserData)
        })
    },

    //create user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    },

    //update user by id
    updateUser({ params, body }, res) {
        User.findByIdAndUpdate({_id:params.id}, body, { new: true })
            .then(dbUserData => {
                if(!dbUserData) return res.status(404).json({message: 'No user with this id'})
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))

    },

    //delete user
    deleteUser(){

    },

    //bonus
        //add friend
        //delete friend

}

module.exports = userController