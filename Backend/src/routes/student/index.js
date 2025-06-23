const { createStudent } = require("../../controllers/student/create");

const route = require("express").Router();

route.post("/create", createStudent);

module.exports = route;
