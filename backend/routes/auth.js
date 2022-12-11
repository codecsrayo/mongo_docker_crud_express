const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// constraseña
const bcrypt = require("bcrypt");

// validation
const Joi = require("@hapi/joi");

const schemaRegister = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
  active: Joi.boolean(),
  role: Joi.string(),
});

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});

router.post("/register", async (req, res) => {
  // validate user
  const { error } = schemaRegister.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(400).json({ error: "Email ya registrado" });
  }

  // validate rol in administador and docente
  if (req.body.role !== "docente" && req.body.role !== "administrador") {
    return res
      .status(400)
      .json({ error: "Rol no valido, perimitidos docente, administrador" });
  }

  // hash contraseña
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: password,
    active: req.body.active,
    role: req.body.role,
  });
  try {
    const savedUser = await user.save();
    res.json({
      error: null,
      data: savedUser,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// create login route and create token and send it to the client
router.post("/login", async (req, res) => {
  // validate user
  const { error } = schemaLogin.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // check if email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ error: "Email o contraseña incorrectos" });
  }

  // check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: "Email o contraseña incorrectos" });
  }

  // create token
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
      role: user.role,
    },
    process.env.TOKEN_SECRET
  );

  res.header("Authorization", token).json({
    error: null,
    data: { token },
  });
});

module.exports = router;
