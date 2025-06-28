const { createAdmin } = require("../../controllers/user/createAdmin");

const route = require("express").Router();

route.post("/create", createAdmin);

module.exports = route;
