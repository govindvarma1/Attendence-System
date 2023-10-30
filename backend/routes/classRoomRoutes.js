const router = require("express").Router();
const { CreateClassRoom, JoinClassRoom, addPost, deletePost } = require("../controllers/classRoomController");

router.post("/create/", CreateClassRoom);
router.post("/join/", JoinClassRoom);
router.post("/addpost/", addPost);
router.post("/deletepost/", deletePost);

module.exports = router;