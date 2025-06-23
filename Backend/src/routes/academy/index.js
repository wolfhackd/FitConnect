const { PrismaClient } = require("../../../prisma/generated/prisma");
const { createAcademy } = require("../../controllers/academy/create");
const { listAcademy } = require("../../controllers/academy/list");
const { listUsers } = require("../../controllers/user/list");
const authMiddleware = require("../../middleware/auth");
const typeOfUser = require("../../middleware/typeOfUser");
const router = require("express").Router();
const prisma = new PrismaClient();

router.get("/list", listAcademy);
//admin
// router.post("/create",authMiddleware, typeOfUser(1) ,createAcademy);
router.post("/create", createAcademy);
//users
router.post("/listusers", authMiddleware, typeOfUser(1), listUsers);

module.exports = router;
