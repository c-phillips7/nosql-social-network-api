const router = require('express').Router();

// import functions from controller
const {
    getAllThoughts,
    addThought,
    updateThought,
    removeThought,
    getThoughtbyId,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller')

//write logic to correlate functions to http routes
// all routes for '/api/thoughts'
router.route('/')
    .get(getAllThoughts)
    .post(addThought)

// all routes for '/api/thoughts/:thoughtId'
router.route('/:thoughtId')
    .put(updateThought)
    .delete(removeThought)
    .get(getThoughtbyId)

// reaction routes
router.route('/:thoughtId/')
    .post(addReaction)

router.route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;