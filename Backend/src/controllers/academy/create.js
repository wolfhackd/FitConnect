const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const createAcademy = async (req, res) => {
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
};

module.exports = { createAcademy };
