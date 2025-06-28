const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

//Fazer um protetor de rota e colocar admin na rota
const createSupervisor = async (req, res) => {
  try {
    const { name, cpf, birth, phone, userType = 1, academyId } = req.body;

    const academy = await prisma.academy.findUnique({
      where: { id: academyId },
    });
    if (!academy) {
      return res.status(404).json({ message: "Academia não encontrada" });
    }
    const existingUser = await prisma.user.findFirst({
      where: { cpf: cpf },
      include: { academies: { where: { id: academyId } } },
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Usuário com esse CPF na academia" });
    }

    const admin = await prisma.user.create({
      data: {
        name,
        cpf,
        birth: new Date(birth),
        phone,
        userType,
        academies: {
          connect: {
            id: academyId,
          },
        },
      },
    });

    res.json({ message: "Usuário criado com sucesso", admin });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createSupervisor };
