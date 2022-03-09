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
    getThoughtbyId({ params }, res) {
        Thought.findOne({ _id:params.thoughtId })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({message: "No thought found with this id"})
                return
            }
            res.json(dbThoughtData)
        })
        .catch(err => {
            res.status(400).json(err)
        });
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
                    res.status(404).json({ message: "no thought found with this id" });
                    return
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.json(err));
    },

    //update thought by _id

    updateThought({ params, body }, res) {
        Thought.findByIdAndUpdate({ _id:params.thoughtId }, body, { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "no thought found with this id" });
                    return
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.json(err));
    },

    //delete thought bu _id

    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id:params.thoughtId })
            .then(deletedThought => {
                if (!deletedThought) {
                    return res.status(404).json({ message: "No thought with this id" })
                }
                return res.json("Thought deleted")
            })
            .catch(err => res.json(err));
    },

    // add reaction to thought
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId },
            { $push: { reactions: body }},
            { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                   return res.status(404).json({ message: "No thought with this id"});
                }
                return res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },

    //delete reaction from thought
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id:params.thoughtId },
            { $pull: {reactions: { _id:params.reactionId }}},
            { new: true}
        )
        .then(dbReactionData => res.json(dbReactionData))
        .catch(err => res.json(err))
    },
};

module.exports = thoughtController