const router = require("express").Router();
const authMiddleware = require("../../middleware/auth");

router.get("/check", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Autenticado", user: req.user });
});

module.exports = router;
