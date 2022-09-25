module.exports = app => {
    const estado_equipo = require("../controllers/estado.equipo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", estado_equipo.create);
  
    // Retrieve all Tutorials
    router.get("/", estado_equipo.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", estado_equipo.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", estado_equipo.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", estado_equipo.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", estado_equipo.delete);
  
    // Create a new Tutorial
    router.delete("/", estado_equipo.deleteAll);
  
    app.use("/api/estado_equipo", router);
  };
  