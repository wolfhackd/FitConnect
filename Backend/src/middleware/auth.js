const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken && !refreshToken) {
    return res.status(401).json({ mensagem: "Não autenticado" });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    if (!refreshToken) {
      return res.status(403).json({ mensagem: "Token inválido" });
    }

    try {
      console.log("Access expirado. Tentando refresh token...");

      const decodedRefresh = jwt.verify(
        refreshToken,
        process.env.JWT_SECRET_REFRESH
      );

      const newAccessToken = jwt.sign(decodedRefresh, process.env.JWT_SECRET);

      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 15 * 60 * 1000,
      });

      console.log("Novo access token emitido:", newAccessToken);

      req.user = decodedRefresh;
      return next();
    } catch (refreshErr) {
      console.error("Refresh token inválido:", refreshErr.message);
      return res.status(403).json({ mensagem: "Refresh token inválido" });
    }
  }
}

module.exports = authMiddleware;
