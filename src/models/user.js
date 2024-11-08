const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        require: true,
        minLength: 4,
        maxLength: 50
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 50
    },
    gender: {
        type: String,
        validate(value) {
            if (!["male", "female", "others"].includes(value)) {
                throw new Error("Gender is not valid")

            }
        }
    },
    photoUrl: {
        type: String,
        default: "https://pixabay.com/vectors/man-people-user-avatar-green-156836/"
    },
    about: {
        type: String,
        default: "This is the default about of the User"
    },
    skills: {
        type: [String]
    }
},{timestamps: true
    
})

module.exports = mongoose.model('User', userSchema)

