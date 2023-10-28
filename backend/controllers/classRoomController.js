const ClassRoom = require("../models/classRoomModal");
const { uuidGenerator } = require("../utils/UUIDGenerator");

module.exports.CreateClassRoom = async (req, res, next) => {
    try {
        const { _id, email } = req.body.user;
        let code = uuidGenerator(8);
        const newClassRoom = await ClassRoom.create({
            code: code,
            name: "Test Classroom",
            subject: "Test Subject",
            description: "This is a test classroom",
            teachers: [
                {
                    id: _id,
                    name: email,
                }
            ],
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