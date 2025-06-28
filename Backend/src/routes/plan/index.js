const { createPlan } = require("../../controllers/plan/create");
const { getPlanByUser } = require("../../controllers/plan/getPlanByUser");
const { listPlan } = require("../../controllers/plan/list");
const route = require("express").Router();

route.post("/list", listPlan);
route.post("/create", createPlan);
route.post("/getPlanByUser", getPlanByUser);

module.exports = route;
