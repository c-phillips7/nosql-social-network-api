const router = require('express').Router();

// import functions from controller
const{
    createUser,
    getAllUser
} = require('../../controllers/user-controller')


//write logic to correlate functions to http routes

// all GET and POST requests at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);


module.exports = router;