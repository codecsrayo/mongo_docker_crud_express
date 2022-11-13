module.exports = (app) => {
  const EtapasControler = require("../controllers/EtapasControler");

  var router = require("express").Router();

  // Create a new Etapa
  router.post("/", EtapasControler.create);

  // Retrieve all Etapas
  router.get("/", EtapasControler.findAll);

  // Retrieve all published Etapas
  router.get("/published", EtapasControler.findAllPublished);

  // Retrieve a single Etapa with id
  router.get("/:id", EtapasControler.findOne);

  // Update a Etapa with id
  router.put("/:id", EtapasControler.update);

  // Delete a Etapa with id
  router.delete("/:id", EtapasControler.delete);

  // Create a new Etapa
  router.delete("/", EtapasControler.deleteAll);

  app.use("/api/etapas", router);
};
