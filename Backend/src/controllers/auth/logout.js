const logout = (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.status(200).json({ message: "Deslogado com sucesso" });
};

module.exports = { logout };
