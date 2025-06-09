const { PrismaClient } = require("./prisma/generated/prisma");
const express = require("express");
const academyRoutes = require("./src/routes/academies/index.js");
const loginRoutes = require("./src/routes/auth/index.js");
const authMiddleware = require("./src/middleware/auth.js");
const typeOfUser = require("./src/middleware/typeOfUser.js");
const cors = require("cors");
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.use("/academy", academyRoutes);
app.use("/login", loginRoutes);

app.listen(3000, () => {
  console.log("Sevidor rodando em http://localhost:3000");
});

token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNtYnBubDdzdjAwMDJ2d213YXB2bDgybDkiLCJuYW1lIjoiTWF1cm8gTGVhbCIsImNwZiI6IjEyMzQ1Njc4OTEyIiwiYWdlIjoyMSwieWVhck9mQmlydGgiOjIwMDQsInVzZXJUeXBlIjoxLCJjcmVhdGVkQXQiOiIyMDI1LTA2LTA5VDIyOjE4OjExLjI2M1oiLCJ1cGRhdGVkQXQiOiIyMDI1LTA2LTA5VDIyOjE4OjExLjI2M1oiLCJpYXQiOjE3NDk1MDc1NjAsImV4cCI6MTc0OTU5Mzk2MH0.NXjTAiSQT2iMPkU0wqzfIoZqNNL6odpvKqhWenE8nwE";
