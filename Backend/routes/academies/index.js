const { PrismaClient } = require("../../prisma/generated/prisma");
const router = require("express").Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const academies = await prisma.academy.findMany();
    res.status(200).json(academies);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    const newAcademy = await prisma.academy.create({
      data: {
        name: req.body.name,
      },
    });
    res.json({ message: "Academia criada com sucesso", newAcademy });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao criar academia", details: err.message });
  }
});

router.post("/listusers", async (req, res) => {
  try {
    const users = await prisma.academy.findUnique({
      where: {
        id: req.body.id,
      },
      include: {
        users: true,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuarios", details: err.message });
  }
});

router.post("/createuser", async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: req.body.name,
        cpf: req.body.cpf,
        age: req.body.age, //numero inteiro
        yearOfBirth: req.body.yearOfBirth, //numero inteiro
        academies: {
          connect: {
            id: req.body.id, // ID da academia que você deseja associar
          },
        },
      },
    });
    res.json({
      message: "Usuário cadastrado na academia com sucesso",
      newUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao criar usuario", details: err.message });
  }
});

module.exports = router;
