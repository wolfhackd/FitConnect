const { PrismaClient } = require("../../../prisma/generated/prisma");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
require("dotenv").config();

const SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.JWT_SECRET_REFRESH;

const login = async (req, res) => {
  try {
    const { academyId, accessId, userType } = req.body;

    if (!academyId) {
      return res.status(400).json({ message: "Academia não informada." });
    }
    if (!accessId) {
      return res.status(400).json({ message: "CPF ou código não informado" });
    }
    if (userType !== 0 && userType !== 1) {
      return res.status(400).json({ message: "Tipo de usuário inválido" });
    }
    if (accessId && accessId.length < 11) {
      return res.status(400).json({ message: "CPF ou código muito curto" });
    }
    const user = await prisma.user.findFirst({
      where: {
        cpf: accessId,
        userType: userType,
        academies: {
          some: {
            id: academyId,
          },
        },
      },
    });
    if (!user) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    const accessToken = jwt.sign(user, SECRET);
    const refreshToken = jwt.sign(user, REFRESH_SECRET);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });
    res.json({
      message: "Login realizado com sucesso",
      userType: userType,
      academyId: academyId,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro ao realizar login", error: err.message });
  }
};

module.exports = { login };
