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
        return res.status(200).send({ msg: "class room created sucessfully", ClassRoom: newClassRoom });
    } catch (ex) {
        next(ex);
    }
}

module.exports.JoinClassRoom = async (req, res, next) => {
    try {
        const { _id, email } = req.body.user;
        const code = req.body.ClassRoomCode;
        const availableClassRoom = await ClassRoom.find({ code: code });
        if (availableClassRoom === null) {
            return res.status(400).send({ msg: "the classroom does't exist" });
        }
        await ClassRoom.findOneAndUpdate({ code: code }, { $push: { students: { id: _id, name: email } } });
        return res.status(200).send({ msg: "success" });
    } catch (ex) {
        next(ex);
    }
}

module.exports.addPost = async (req, res, next) => {
    try {
        const { email, ClassRoomId, message } = req.body;
        const availableClassRoom = await ClassRoom.findById(ClassRoomId);
        if (availableClassRoom === null) {
            return res.status(400).send({ msg: "classroom doesn't exist" });
        }
        await ClassRoom.findByIdAndUpdate(ClassRoomId, { $push: { posts: { author: email, message: message } } });
        return res.status(200).send({ msg: "new post added" });
    } catch (ex) {
        next(ex);
    }
}

module.exports.deletePost = async (req, res, next) => {
    try {
        const { classRoomId, postId } = req.body;
        res.status(200).send({ msg: "under work" });
    } catch (ex) {
        next(ex);
    }
}