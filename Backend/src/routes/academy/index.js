const { PrismaClient } = require("../../../prisma/generated/prisma");
const { createAcademy } = require("../../controllers/academy/create");
const { listAcademy } = require("../../controllers/academy/list");
const { createUser } = require("../../controllers/user/create");
const { listUsers } = require("../../controllers/user/list");
const authMiddleware = require("../../middleware/auth");
const typeOfUser = require("../../middleware/typeOfUser");
const router = require("express").Router();
const prisma = new PrismaClient();

router.get("/", listAcademy);
//admin
// router.post("/create",authMiddleware, typeOfUser(1) ,createAcademy);
router.post("/create", createAcademy);
//users
router.post("/listusers", authMiddleware, typeOfUser(1), listUsers);
//tenho que fazer um admin tbm
//users
// router.post("/createuser", authMiddleware, typeOfUser(1), createUser);
router.post("/createuser", createUser);

module.exports = router;
