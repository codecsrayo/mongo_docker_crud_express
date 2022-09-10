module.exports = app => {
    const inventario = require("../controllers/inventario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", inventario.create);
  
    // Retrieve all Tutorials
    router.get("/", inventario.findAll);

    // Retrieve all Tutorials
    router.get("/all/relations/estado/true", inventario.findAllEstadoTrue);
  
    // Retrieve all published Tutorials
    router.get("/published", inventario.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", inventario.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", inventario.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", inventario.delete);
  
    // Create a new Tutorial
    router.delete("/", inventario.deleteAll);

    router.put("/assign/usuario/:id", inventario.assignRelationShip);
    router.delete("/delete/usuario/:id", inventario.deleteUsuario);
  

    router.put("/assign_marca/:id", inventario.assignRelationShip);
    router.delete("/delete/marca/:id", inventario.deleteMarca);


    router.put("/assign_nombre_equipo/:id", inventario.assignRelationShip);
    router.delete("/delete/nombre_equipo/:id", inventario.deleteNombreEquipo);


    router.put("/assign/tipo_equipo/:id", inventario.assignRelationShip);
    router.delete("/delete/tipo_equipo/:id", inventario.deleteTipoEquipo);


    app.use("/api/inventario", router);
  };
  