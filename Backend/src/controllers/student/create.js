const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const createStudent = async (req, res) => {
  try {
    const {
      name,
      cpf,
      birth,
      phone,
      userType = 0,
      academyId,
      planId,
      start,
    } = req.body;

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({ where: { cpf } });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Usuário com esse CPF já existe" });
    }

    // Verifica se a academia existe
    const academy = await prisma.academy.findUnique({
      where: { id: academyId },
    });
    if (!academy) {
      return res.status(404).json({ message: "Academia não encontrada" });
    }

    // Verifica se o plano existe
    const plan = await prisma.plan.findUnique({ where: { id: planId } });
    if (!plan) {
      return res.status(404).json({ message: "Plano não encontrado" });
    }

    // Calcula data de início e fim
    const startDate = start ? new Date(start) : new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + plan.duration);

    // Cria o usuário com o aluno e a assinatura
    const newUser = await prisma.user.create({
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
              connect: { id: academyId },
            },
            subscriptions: {
              create: {
                planId,
                academyId,
                start: startDate,
                end: endDate,
              },
            },
          },
        },
      },
      include: {
        Student: {
          include: {
            subscriptions: true,
          },
        },
      },
    });

    return res.status(201).json({
      message: "Usuário, aluno e assinatura criados com sucesso",
      user: newUser,
    });
  } catch (err) {
    console.error("Erro ao criar aluno:", err);
    if (err.code === "P2002" && err.meta?.target?.includes("cpf")) {
      return res
        .status(409)
        .json({ message: "Usuário com esse CPF já existe" });
    }
    return res
      .status(500)
      .json({ message: "Erro ao criar aluno", error: err.message });
  }
};

module.exports = { createStudent };
