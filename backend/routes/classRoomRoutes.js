const router = require("express").Router();
const { CreateClassRoom, JoinClassRoom } = require("../controllers/classRoomController");

router.post("/create/", CreateClassRoom);
router.post("/join/", JoinClassRoom);

module.exports = router;