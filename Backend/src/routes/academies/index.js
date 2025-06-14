const { PrismaClient } = require("../../../prisma/generated/prisma");
const authMiddleware = require("../../middleware/auth");
const typeOfUser = require("../../middleware/typeOfUser");
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

router.post("/create", authMiddleware, typeOfUser(1), async (req, res) => {
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

router.post("/listusers", authMiddleware, typeOfUser(1), async (req, res) => {
  try {
    // console.log(req.body);
    if (
      req.body.status !== null &&
      req.body.status !== undefined &&
      req.body.status !== ""
    ) {
      const users = await prisma.academy.findUnique({
        where: {
          id: req.body.id,
        },
        include: {
          users: {
            where: {
              status: req.body.status,
            },
          },
        },
      });
      res.status(200).json(users);
    } else {
      const users = await prisma.academy.findUnique({
        where: {
          id: req.body.id,
        },
        include: {
          users: true,
        },
      });
      res.status(200).json(users);
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuarios", details: err.message });
  }
});

router.post("/createuser", authMiddleware, typeOfUser(1), async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: req.body.name,
        cpf: req.body.cpf,
        age: req.body.age, //numero inteiro
        yearOfBirth: req.body.yearOfBirth, //numero inteiro
        userType: req.body.userType ?? 0,
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
    if (err.code === "P2002" && err.meta && err.meta.target.includes("cpf")) {
      return res
        .status(409)
        .json({ message: "Usuário com esse CPF já existe" });
    }
    res.status(500).json({ message: "Erro ao criar usuario" });
  }
});

module.exports = router;
