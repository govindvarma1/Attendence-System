const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

})

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 3,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isImageTaken: {
        type: Boolean,
        default: false,
    },
    userImage: {
        type: String,
        default: "",
    },
    classrooms: [
        classroomSchema
    ]
})

module.exports = mongoose.model("users", userSchema);