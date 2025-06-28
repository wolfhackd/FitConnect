const {
  createSupervisor,
} = require("../../controllers/admin/createSupervisor");

const route = require("express").Router();

route.post("/create", createSupervisor);

module.exports = route;
