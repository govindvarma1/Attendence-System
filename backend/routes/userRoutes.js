const { Login, Register, AddImage } = require("../controllers/userController");
const router = require("express").Router();

router.post("/login/", Login);
router.post("/register/", Register);
router.post("/verifyimage/", AddImage);

module.exports = router;