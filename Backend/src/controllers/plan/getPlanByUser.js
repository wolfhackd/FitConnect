const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const getPlanByUser = async (req, res) => {
  const { id, academyId } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
      include: {
        Student: {
          include: {
            subscriptions: {
              where: {
                active: true,
                academyId: academyId,
              },
              include: {
                plan: true,
                academy: true,
              },
            },
          },
        },
      },
    });

    if (!user || !user.Student) {
      return res
        .status(404)
        .json({ message: "Usuário ou estudante não encontrado." });
    }

    const plans = user.Student.subscriptions.map((sub) => ({
      plano: sub.plan,
      inicio: sub.start,
      fim: sub.end,
      academia: sub.academy.name,
    }));

    res.json({ plans });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar planos do usuário." });
  }
};

module.exports = { getPlanByUser };
