module.exports = (app) => {
  const ProyectoControler = require("../controllers/ProyectoControler");

  var router = require("express").Router();

  // Create a new Proyecto
  router.post("/", ProyectoControler.create);

  // Retrieve all Proyectos
  router.get("/", ProyectoControler.findAll);

  // Retrieve all published Proyectos
  router.get("/published", ProyectoControler.findAllPublished);

  // Retrieve a single Proyecto with id
  router.get("/:id", ProyectoControler.findOne);

  // Update a Proyecto with id
  router.put("/:id", ProyectoControler.update);

  // Delete a Proyecto with id
  router.delete("/:id", ProyectoControler.delete);

  // Create a new Proyecto
  router.delete("/", ProyectoControler.deleteAll);

  app.use("/api/proyecto", router);
};
