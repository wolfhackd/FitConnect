const router = require("express").Router();
const authMiddleware = require("../../middleware/auth.js");
const { checkAuth } = require("../../controllers/auth/check");
const { login } = require("../../controllers/auth/login.js");
const { logout } = require("../../controllers/auth/logout.js");

router.post("/", login);
router.get("/check", authMiddleware, checkAuth);
router.post("/logout", logout);

module.exports = router;
