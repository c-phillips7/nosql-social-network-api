const router = require('express').Router();

// import functions from controller
const {
    getAllThoughts,
    addThought,
    updateThought,
    removeThought,
    getOneThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller')

//write logic to correlate functions to http routes
router.route('/')
    .get(getAllThoughts)
    .post(addThought)

router.route('/:thoughtId')
    .put(updateThought)
    .delete(removeThought)
    .get(getOneThought)

router.route('/:thoughtId/')
    .post(addReaction)

router.route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;