const { Schema, model, Types } = require('mongoose');

const ReactionsSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // TODO:  function to format date using getter method
    }
},
{
    toJSON: {
        getters: true
    }
}
);

const ThoughtSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    thoughtBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //TODO: format date with getter
    },
    reactions: [ReactionsSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});