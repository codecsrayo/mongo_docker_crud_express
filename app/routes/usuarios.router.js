module.exports = app => {
    const usuarios = require("../controllers/usuarios.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", usuarios.create);
  
    // Retrieve all Tutorials
    router.get("/", usuarios.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", usuarios.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", usuarios.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", usuarios.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", usuarios.delete);
  
    // Create a new Tutorial
    router.delete("/", usuarios.deleteAll);
  
    app.use("/api/usuarios", router);
  };
  