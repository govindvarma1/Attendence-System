const ClassRoom = require("../models/classRoomModal");

module.exports.CreateClassRoom = async (req, res, next) => {
    try {
        const newClassRoom = await ClassRoom.create({
            name: "Test Classroom",
            subject: "Test Subject",
            description: "This is a test classroom",
            teachers: [],
            students: [],
            posts: [],
        });
        res.status(200).send({ msg: "class room created sucessfully", ClassRoom: newClassRoom });
    } catch (ex) {
        next(ex);
    }
}

module.exports.JoinClassRoom = async (req, res, next) => {
    try {
        res.status(200).send({ msg: "under work" });
    } catch (ex) {
        next(ex);
    }
}