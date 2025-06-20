const checkAuth = (req, res) => {
  res.status(200).json({ message: "Autenticado", user: req.user });
};

module.exports = { checkAuth };
