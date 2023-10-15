const User = require("../models/userModal");
const bcrypt = require("bcrypt");
const admin = require("firebase-admin");
const serviceAccount = require("/home/govindvarma/Downloads/attendsync-3bb5e-firebase-adminsdk-jh4nb-53e9ed5bea.json");
const { dateParser } = require("../utils/dateParser");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: `attendsync-3bb5e.appspot.com`,
});

const storage = admin.storage();
const bucket = storage.bucket();

module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email: email,
        })
        if (!user) {
            return res.status(401).json({ status: "success", msg: "user doesn't exist" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ status: "success", msg: "incorrect username or password" });
        }
        return res.status(200).json({ status: "success", msg: "login successfull", user: user });

    } catch (ex) {
        next(ex);
    }
}

module.exports.Register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(401).json({ status: "success", msg: "user already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
        });
        delete newUser.password;
        return res.status(200).json({ status: "success", msg: "user created sucessfully", newUser });
    } catch (ex) {
        next(ex);
    }
}

module.exports.AddImage = async (req, res, next) => {
    try {
        const id = req.body._id;
        const base64Data = process.env.STRING;
        const buffer = Buffer.from(base64Data, "base64");

        const file = bucket.file(`${dateParser()}.png`);
        const stream = file.createWriteStream({
            metadata: {
                contentType: "image/png",
            },
        });

        console.log(dateParser())

        stream.on("error", (error) => {
            console.error("Error uploading file:", error);
            return res.status(400).json({ msg: "failure", string: base64Data })
        });

        stream.on("finish", async () => {
            console.log("File uploaded successfully.");
            const user = await User.findByIdAndUpdate(id, { isImageTaken: true });
            console.log(user)
            return res.status(200).json({ msg: "success", string: process.env.STRING })
        });

        stream.end(buffer);
    } catch (ex) {
        next(ex);
    }
}

