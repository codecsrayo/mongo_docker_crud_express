module.exports = (app) => {
  const ClienteControler = require("../controllers/ClienteControler");

  var router = require("express").Router();

  // Create a new Cliente
  router.post("/", ClienteControler.create);

  // Retrieve all Clientes
  router.get("/", ClienteControler.findAll);

  // Retrieve all published Clientes
  router.get("/published", ClienteControler.findAllPublished);

  // Retrieve a single Cliente with id
  router.get("/:id", ClienteControler.findOne);

  // Update a Cliente with id
  router.put("/:id", ClienteControler.update);

  // Delete a Cliente with id
  router.delete("/:id", ClienteControler.delete);

  // Create a new Cliente
  router.delete("/", ClienteControler.deleteAll);

  app.use("/api/cliente", router);
};
