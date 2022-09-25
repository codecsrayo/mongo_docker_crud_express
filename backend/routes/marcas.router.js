module.exports = app => {
    const marcas = require("../controllers/marcas.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", marcas.create);
  
    // Retrieve all Tutorials
    router.get("/", marcas.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", marcas.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", marcas.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", marcas.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", marcas.delete);
  
    // Create a new Tutorial
    router.delete("/", marcas.deleteAll);
  
    app.use("/api/marcas", router);
  };
  