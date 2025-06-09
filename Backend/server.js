const { PrismaClient } = require("./prisma/generated/prisma");
const express = require("express");
const academyRoutes = require("./routes/academies/index.js");
const loginRoutes = require("./routes/auth/index.js");
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
