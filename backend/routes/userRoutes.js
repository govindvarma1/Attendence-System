const { Login, Register, AddImage, isLogin } = require("../controllers/userController");
const router = require("express").Router();

router.post("/login/", Login);
router.post("/register/", Register);
router.post("/verifyimage/", AddImage);
router.post("/islogin/", isLogin);

module.exports = router;