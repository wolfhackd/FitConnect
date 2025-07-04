const { createPlan } = require("../../controllers/plan/create");
const { getPlanByUser } = require("../../controllers/plan/getPlanByUser");
const { listPlan } = require("../../controllers/plan/list");
const authMiddleware = require("../../middleware/auth");
const typeOfUser = require("../../middleware/typeOfUser");
const route = require("express").Router();

route.post("/list", listPlan);
route.post("/create", authMiddleware, typeOfUser(1), createPlan);
route.post("/getPlanByUser", getPlanByUser);

module.exports = route;
