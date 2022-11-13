module.exports = (app) => {
  const UniversidadControler = require("../controllers/UniversidadControler");

  var router = require("express").Router();

  // Create a new Universidad
  router.post("/", UniversidadControler.create);

  // Retrieve all Universidades
  router.get("/", UniversidadControler.findAll);

  // Retrieve all published Universidades
  router.get("/published", UniversidadControler.findAllPublished);

  // Retrieve a single Universidad with id
  router.get("/:id", UniversidadControler.findOne);

  // Update a Universidad with id
  router.put("/:id", UniversidadControler.update);

  // Delete a Universidad with id
  router.delete("/:id", UniversidadControler.delete);

  // Create a new Universidad
  router.delete("/", UniversidadControler.deleteAll);

  app.use("/api/universidad", router);
};
