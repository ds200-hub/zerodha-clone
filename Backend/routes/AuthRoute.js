const {SignUp,Login} = require("../controllers/AuthController");
const {userVerification} = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post('/',userVerification)
router.post("/signup", SignUp);
router.post("/login", Login);

module.exports = router;