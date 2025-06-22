const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const createPlan = async (req, res) => {
  const { name, price, duration, academyId } = req.body;
  try {
    const newPlan = await prisma.plan.create({
      data: {
        name: name,
        price: price,
        duration: duration,
        academyId: academyId,
      },
    });
    return res.json({ message: "Plano criado com sucesso" });
  } catch (error) {
    console.log("Erro ao criar plano", error);
  }
};

module.exports = { createPlan };
