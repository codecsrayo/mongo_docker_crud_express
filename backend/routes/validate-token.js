const jwt = require("jsonwebtoken");

// middleware to validate token (rutas protegidas)
const verifyTokenRolAdmin = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Acceso denegado" });
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // Verifica si el usuario tiene alguno de los roles especificados
    if (!decoded.role.includes("administrador")) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next(); // continuamos
  } catch (error) {
    res.status(400).json({ error: "token no es válido" });
  }
};

const verifyTokenRolDocente = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Acceso denegado" });
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decoded.role);

    // Verifica si el usuario tiene alguno de los roles especificados
    if (
      !decoded.role.includes("docente") &&
      !decoded.role.includes("administrador")
    ) {
      console.log("Error: ", decoded.role);
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next(); // continuamos
  } catch (error) {
    res.status(400).json({ error: "token no es válido" });
  }
};

module.exports = { verifyTokenRolAdmin, verifyTokenRolDocente };
