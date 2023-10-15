const mongoose = require("mongoose");

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
    }
})

module.exports = mongoose.model("users", userSchema);