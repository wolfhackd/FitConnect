const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const listUsers = async (req, res) => {
  const { academyId, status, studentId } = req.body;
  try {
    const filterConditions = {};

    if (status !== null && status !== undefined && status !== "") {
      filterConditions.status = status;
    }

    if (studentId !== null && studentId !== undefined && studentId !== "") {
      const cpfRegex = /^\d{11}$/;
      if (cpfRegex.test(studentId)) {
        filterConditions.cpf = studentId;
      } else {
        filterConditions.name = {
          contains: studentId,
          mode: "insensitive",
        };
      }
    }

    const userFilter = {
      where: filterConditions,
      orderBy: {
        name: "asc",
      },
    };

    const users = await prisma.academy.findUnique({
      where: { id: academyId },
      include: {
        users: userFilter,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuarios", details: err.message });
  }
};

module.exports = { listUsers };
