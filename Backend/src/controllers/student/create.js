const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const createStudent = async (req, res) => {
  try {
    const { name, cpf, userType = 0, birth, phone, academyId } = req.body;

    //Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { cpf },
    });

    //Retorna se existir
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Usuário com esse CPF já existe" });
    }

    //Futuramente fazer verificação de tipo de usuario

    // Cria o usuário e associa à academia
    const newStudent = await prisma.user.create({
      data: {
        name,
        cpf,
        birth: new Date(birth),
        phone,
        userType,
        academies: {
          connect: { id: academyId },
        },
        Student: {
          create: {
            academies: {
              connect: {
                id: academyId,
              },
            },
          },
        },
      },
    });

    res.json({
      message: "Usuário cadastrado na academia com sucesso",
      newStudent,
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

module.exports = { createStudent };
