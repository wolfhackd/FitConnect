const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: req.body.name,
        cpf: req.body.cpf,
        birth: new Date(req.body.birth),
        userType: req.body.userType ?? 0,
        phone: req.body.phone,
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
};

module.exports = { createUser };
