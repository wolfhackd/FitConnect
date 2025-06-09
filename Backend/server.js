const { PrismaClient } = require("./prisma/generated/prisma");
const express = require("express");
// const loginRoutes = require("./routes/auth/index");
const academyRoutes = require("./routes/academies/index.js");
const cors = require("cors");
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
// app.use("/", loginRoutes);
app.use("/academy", academyRoutes);

// async function criarUsuario() {
//   const novoUsuario = await prisma.user.create({
//     data: {
//       name: "Mauro",
//       cpf: "12345678900",
//       age: 21,
//       yearOfBirth: 2004,
//       academies: {
//         connect: {
//           id: "cmboassr60000vweo3yc0547f", // ID da academia que você deseja associar
//         },
//       },
//     },
//   });
//   console.log(novoUsuario);
// }

// criarUsuario();

app.listen(3000, () => {
  console.log("Sevidor rodando em http://localhost:3000");
});
