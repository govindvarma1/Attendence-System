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
        delete user._doc.password
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
        delete newUser._doc.password;
        return res.status(200).json({ status: "success", msg: "user created sucessfully", user: newUser });
    } catch (ex) {
        next(ex);
    }
}

module.exports.AddImage = async (req, res, next) => {
    try {
        const id = req.body.userId;
        console.log(id)
        const base64Data = req.body.image.substring(23);
        const buffer = Buffer.from(base64Data, "base64");

        const file = bucket.file(`${dateParser()}.png`);
        const stream = file.createWriteStream({
            metadata: {
                contentType: "image/png",
            },
        });
        stream.on("error", (error) => {
            console.error("Error uploading file:", error);
            return res.status(400).json({ msg: "failure" })
        });
        stream.on("finish", async () => {
            console.log("File uploaded successfully.");
            const image = `https://firebasestorage.googleapis.com/v0/b/${process.env.STORAGEBUCKET}/o/${dateParser()}.png?alt=media&token=${process.env.ACCESS_TOKEN}`
            console.log(image);
            await User.findByIdAndUpdate(id, { isImageTaken: true, userImage: image });
            const updatedUser = await User.findById(id);
            delete updatedUser._doc.password;
            delete updatedUser._doc.userImage;
            return res.status(200).json({ msg: "success", user: updatedUser._doc })
        });
        stream.end(buffer);
    } catch (ex) {
        next(ex);
    }
}

