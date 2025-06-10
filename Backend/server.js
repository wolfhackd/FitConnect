const express = require("express");
const cookieParser = require("cookie-parser");
const academyRoutes = require("./src/routes/academies/index.js");
const loginRoutes = require("./src/routes/auth/index.js");
const checkRoutes = require("./src/routes/auth/check.js");
const authMiddleware = require("./src/middleware/auth.js");
const typeOfUser = require("./src/middleware/typeOfUser.js");
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/academy", academyRoutes);
app.use("/login", loginRoutes);
app.use("/auth", checkRoutes);

app.listen(3000, () => {
  console.log("Sevidor rodando em http://localhost:3000");
});
