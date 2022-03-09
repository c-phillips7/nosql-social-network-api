const router = require('express').Router();

// import functions from controller
const{
    createUser
} = require('../../controllers/user-controller')


//write logic to correlate functions to http routes

// all GET and POST requests at /api/users
router
    .route('/')
    .post(createUser)


module.exports = router;