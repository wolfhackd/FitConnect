const { PrismaClient } = require("../../prisma/generated/prisma");
const router = require("express").Router();
const prisma = new PrismaClient();

// router.get("/list", async (req, res) => {
//   try {
//     const users = await prisma.academy.findUnique({
//       where: {
//         id: req.params.id,
//       },
//       include: {
//         users: true,
//       },
//     });
//     res.status(200).json(users);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ error: "Erro ao buscar usuarios", details: err.message });
//   }
// });

// router.post("/create", async (req, res) => {
//   try {
//     const novaAcademia = await prisma.academy.create({
//       data: {
//         name: req.body.name,
//       },
//     });
//     res.json({ message: "Academia criada com sucesso", novaAcademia });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ error: "Erro ao criar academia", details: err.message });
//   }
// });

module.exports = router;
