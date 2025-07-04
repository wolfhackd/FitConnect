const { createStudent } = require("../../controllers/student/create");
const { updateUser } = require("../../controllers/user/updateUser");
const typeOfUser = require("../../middleware/typeOfUser");

const route = require("express").Router();

route.post("/create", typeOfUser(1), createStudent);
route.post("/update", typeOfUser(1), updateUser);

module.exports = route;
