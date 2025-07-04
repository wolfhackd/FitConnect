const {
  createSupervisor,
} = require("../../controllers/admin/createSupervisor");
const typeOfUser = require("../../middleware/typeOfUser");

const route = require("express").Router();

route.post("/create", typeOfUser(1), createSupervisor); //tenho que colocar mais um type of user de poder maior

module.exports = route;
