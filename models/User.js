const {
    Schema,
    model
} = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'username is required',
        trim: true
    },
    
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },

    createdAt: {
        type: Date,
        default: Date.now,
        //TODO: getter function to format date
    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],

    freinds: [

    ]
}, {
    toJSON: {
        vitruals: true,
        getters: true
    },
    id: false
});

//virtual for friend count
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;