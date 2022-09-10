module.exports = app => {
    const tipo_equipo = require("../controllers/tipo.equipo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tipo_equipo.create);
  
    // Retrieve all Tutorials
    router.get("/", tipo_equipo.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tipo_equipo.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tipo_equipo.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tipo_equipo.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tipo_equipo.delete);
  
    // Create a new Tutorial
    router.delete("/", tipo_equipo.deleteAll);
  
    app.use("/api/tipo_equipo", router);
  };
  