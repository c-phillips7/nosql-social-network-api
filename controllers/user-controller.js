const { User } = require('../models');

const userController = {
    //get all users

    //get user by id

    //create user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    },

    //update user by id

    //delete user

    //bonus
        //add friend
        //delete friend

}

module.exports = userController