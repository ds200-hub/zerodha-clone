const {SignUp,Login,Logout} = require("../controllers/AuthController");
const {userVerification} = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post('/',userVerification)
router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/logout", Logout);

module.exports = router;