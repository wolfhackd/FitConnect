const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const listPlan = async (req, res) => {
  const { academyId } = req.body;
  try {
    const plans = await prisma.plan.findMany({
      where: {
        academyId: academyId,
      },
    });
    return res.json(plans);
  } catch (error) {
    console.log({ message: "Erro ao listar planos" });
  }
};

module.exports = { listPlan };
