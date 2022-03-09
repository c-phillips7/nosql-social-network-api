const router = require('express').Router();

// import functions from controller
const{
    createUser,
    getAllUser,
    getUserbyId,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller')


//write logic to correlate functions to http routes

// all GET and POST requests at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// all GET, POST, and DELETE requests at /api/users/:id
router
    .route('/:id')
    .get(getUserbyId)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;