const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const listAcademy = async (req, res) => {
  try {
    const academies = await prisma.academy.findMany();
    res.status(200).json(academies);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { listAcademy };
