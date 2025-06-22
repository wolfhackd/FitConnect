const express = require("express");
const cookieParser = require("cookie-parser");
const academyRoutes = require("./src/routes/academy/index.js");
const loginRoutes = require("./src/routes/login/index.js");
const planRoutes = require("./src/routes/plan/index.js");
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
app.use("/auth", loginRoutes);
app.use("/plan", planRoutes);

app.listen(3000, () => {
  console.log("Sevidor rodando em http://localhost:3000");
});
