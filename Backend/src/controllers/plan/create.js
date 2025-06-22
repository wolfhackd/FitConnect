const { PrismaClient, Prisma } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const createPlan = async (req, res) => {
  const { name, price, duration, academyId } = req.body;

  try {
    if (!name || !price || !duration || !academyId) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios" });
    }

    const parsedDuration = parseInt(duration);
    if (isNaN(parsedDuration) || parsedDuration <= 0) {
      return res.status(400).json({ message: "Duração inválida" });
    }

    const parsedPrice = new Prisma.Decimal(price);
    if (isNaN(parsedPrice.toNumber()) || parsedPrice.lte(0)) {
      return res.status(400).json({ message: "Preço inválido" });
    }

    // Verifica se já existe plano com mesmo nome para a mesma academia
    const existingPlan = await prisma.plan.findFirst({
      where: {
        name: name.trim(),
        academyId,
      },
    });
    if (existingPlan) {
      return res.status(400).json({ message: "Plano com esse nome já existe" });
    }

    const newPlan = await prisma.plan.create({
      data: {
        name: name.trim(),
        price: parsedPrice,
        duration: parsedDuration,
        academyId,
      },
    });

    return res
      .status(201)
      .json({ message: "Plano criado com sucesso", plan: newPlan });
  } catch (error) {
    console.error("Erro ao criar plano:", error);
    return res.status(500).json({ message: "Erro interno ao criar plano" });
  }
};

module.exports = { createPlan };
