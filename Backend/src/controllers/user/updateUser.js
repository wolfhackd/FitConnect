const { PrismaClient } = require("../../../prisma/generated/prisma");
const prisma = new PrismaClient();

const updateUser = async (req, res) => {
  const { id, name, cpf, birth, phone, plano, academyId } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        cpf,
        birth: new Date(birth),
        phone,
      },
    });
    res.json({ message: "Usuário atualizado com sucesso", user });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao atualizar usuário", details: err.message });
  }
};

module.exports = { updateUser };
