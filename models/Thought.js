const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


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
        // get:(createdAtVal)=> dateFormat(createdAtVal)
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
        get:(createdAtVal)=> dateFormat(createdAtVal)
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

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;