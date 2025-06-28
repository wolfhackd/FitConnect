const { createStudent } = require("../../controllers/student/create");
const { updateUser } = require("../../controllers/user/updateUser");

const route = require("express").Router();

route.post("/create", createStudent);
route.post("/update", updateUser);

module.exports = route;
