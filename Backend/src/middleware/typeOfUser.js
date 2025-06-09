function typeOfUser(permission) {
  return (req, res, next) => {
    if (req.user.userType !== permission) {
      return res.status(403).json({ mensagem: "Acesso negado: sem permissão" });
    }
    next();
  };
}

module.exports = typeOfUser;
