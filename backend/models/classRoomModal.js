const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const postsSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const classRoomSchema = mongoose.Schema({
    code: {
        type: String,
        unique: true,
    },
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
    },
    teachers: [
        teacherSchema
    ],
    students: [
        studentSchema
    ],
    posts: [
        postsSchema
    ]
}, { timestamps: true })

module.exports = mongoose.model("classroom", classRoomSchema);