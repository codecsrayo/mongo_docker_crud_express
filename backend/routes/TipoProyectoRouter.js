module.exports = (app) => {
  const TipoProyectoControler = require("../controllers/TipoProyectoControler");

  var router = require("express").Router();

  // Create a new Universidad
  router.post("/", TipoProyectoControler.create);

  // Retrieve all TipoProyectos
  router.get("/", TipoProyectoControler.findAll);

  // Retrieve all published TipoProyectos
  router.get("/published", TipoProyectoControler.findAllPublished);

  // Retrieve a single Universidad with id
  router.get("/:id", TipoProyectoControler.findOne);

  // Update a Universidad with id
  router.put("/:id", TipoProyectoControler.update);

  // Delete a Universidad with id
  router.delete("/:id", TipoProyectoControler.delete);

  // Create a new Universidad
  router.delete("/", TipoProyectoControler.deleteAll);

  app.use("/api/tipo_proyectos", router);
};
