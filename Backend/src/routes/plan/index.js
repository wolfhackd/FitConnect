const { createPlan } = require("../../controllers/plan/create");
const { listPlan } = require("../../controllers/plan/list");
const route = require("express").Router();

route.post("/list", listPlan);
route.post("/create", createPlan);

module.exports = route;
