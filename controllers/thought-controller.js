const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res){
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                res.status(400).json(err)
            })
    },

    //get one thought by _id
    getThoughtbyId() {

    },
    // create new thought, then push thought's _id to associated user

    addThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "no user found with this id" });
                    return
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.json(err));
    },

    //update thought by _id

    updateThought() {

    },

    //delete thought bu _id

    removeThought() {

    },

    // add reaction to thought
    addReaction() {

    },

    //delete reaction from thought
    removeReaction() {

    },
};

module.exports = thoughtController