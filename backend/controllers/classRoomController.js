const ClassRoom = require("../models/classRoomModal");
const User = require("../models/userModal");
const { uuidGenerator } = require("../utils/UUIDGenerator");

module.exports.CreateClassRoom = async (req, res, next) => {
    try {
        const { _id, email } = req.body.user;
        const { name, subject, description } = req.body.details;
        let code = uuidGenerator(8);
        const newClassRoom = await ClassRoom.create({
            code: code,
            name: name,
            subject: subject,
            description: description,
            teachers: [
                {
                    id: _id,
                    name: email,
                }
            ],
            students: [],
            posts: [],
        });
        await User.findByIdAndUpdate(_id, { $push: { classrooms: { _id: newClassRoom._id, name: name, subject: subject, description: description } } });
        return res.status(200).send({ msg: "class room created sucessfully", ClassRoom: newClassRoom });
    } catch (ex) {
        next(ex);
    }
}

module.exports.JoinClassRoom = async (req, res, next) => {
    try {
        const { _id, email } = req.body.user;
        const code = req.body.ClassRoomCode;
        const availableClassRoom = await ClassRoom.findOne({ code: code });
        if (availableClassRoom === null) {
            return res.status(400).send({ msg: "the classroom does't exist" });
        }
        const userExists = await ClassRoom.findOne({ "students._id": _id });
        if (userExists === null) {
            await ClassRoom.findOneAndUpdate({ code: code }, { $push: { students: { _id: _id, name: email } } });
            await User.findOneAndUpdate({ _id: _id }, { $push: { classrooms: { _id: availableClassRoom._id, name: availableClassRoom.name, subject: availableClassRoom.subject, description: availableClassRoom.description } } });
            console.log(userExists);
            return res.status(200).send({ msg: "success" });
        }
        return res.status(200).send({ msg: "user already in classroom" });
    } catch (ex) {
        next(ex);
    }
}

module.exports.OpenClassRoom = async (req, res, next) => {
    try {
        const { ClassRoomId, userId } = req.body;
        console.log(ClassRoomId);
        const availableClassRoom = await ClassRoom.findById(ClassRoomId);
        if (availableClassRoom === null) {
            return res.status(404).send({ msg: "the required classroom doesn't exist" });
        }
        return res.status(200).send({ msg: "sucess", classroom: availableClassRoom });
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

module.exports.fetchPeople = async (req, res, next) => {
    try {
        const { ClassRoomId } = req.body;
        const availableClassRoom = await ClassRoom.findById(ClassRoomId);
        if (availableClassRoom === null) {
            return res.status(200).send({ msg: "classroom doesn't exist" });
        }
        const { teachers, students } = availableClassRoom;
        return res.status(200).send({
            msg: "success", people: {
                teachers: teachers, students: students
            }
        });
    } catch (ex) {
        next(ex);
    }
}