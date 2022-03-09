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
        // function to format date using getter method
    }
},
{
    toJSON: {
        getters: true
    }
}
)