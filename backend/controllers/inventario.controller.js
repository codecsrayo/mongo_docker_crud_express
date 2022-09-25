const { usuarios } = require("../models");
const db = require("../models");
const Inventario = db.inventario;

// Create and Save a new Inventario
exports.create = (req, res) => {
  // Validate request
  if (!req.body.serial) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Inventario
  const inventario = new Inventario({
    serial: req.body.serial,
    modelo: req.body.modelo,
    descripcion: req.body.descripcion,
    foto: req.body.foto,
    color: req.body.color,
    precio: req.body.precio

      

    
  });

  // Save Inventario in the database
  inventario
    .save(inventario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Inventario."
      });
    });
};

// Retrieve all Inventarios from the database.
exports.findAll = (req, res) => {
  Inventario.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Inventarios."
      });
    });
};


// Retrieve all Inventarios from the database.

exports.findAllEstadoTrue = (req, res) => {
  const marca = req.query;
  var condition = marca ? { estado: { $regex: true} } : {};

  Inventario.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Inventarios."
      });
    });
};







// Find a single Inventario with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Inventario.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Inventario with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Inventario with id=" + id });
    });
};

// Update a Inventario by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Inventario.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Inventario with id=${id}. Maybe Inventario was not found!`
        });
      } else res.send({ message: "Inventario was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Inventario with id=" + id
      });
    });
};

// Delete a Inventario with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Inventario.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Inventario with id=${id}. Maybe Inventario was not found!`
        });
      } else {
        res.send({
          message: "Inventario was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Inventario with id=" + id
      });
    });
};

// Delete all Inventarios from the database.
exports.deleteAll = (req, res) => {
  Inventario.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Inventarios were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Inventarios."
      });
    });
};

// Find all published Inventarios
exports.findAllPublished = (req, res) => {
  Inventario.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Inventarios."
      });
    });
};



//Assign RelationShip------------------------------------------>

exports.assignRelationShip = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Inventario.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update with id=${id}. was not found!`
        });
      } else res.send({ message: "was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating id=" + id
      });
    });
};




exports.deleteUsuario = (req, res) => {

  const id = req.params.id;
  Inventario.findByIdAndUpdate(id,
    { $unset: { usuario: []} }, 
    { useFindAndModify: false })
    .then(data => {
      if (data) {
        res.send({ message: "was delete successfully." });
      } else res.status(404).send({message: `Cannot delete id=${id}. was not found!`});
    })
    .catch(err => {
      res.status(500).send({
        message: "Error delete id=" + id
      });
    });
};



//del marca------------------------------------------>


exports.deleteMarca = (req, res) => {

  const id = req.params.id;


  Inventario.findByIdAndUpdate(id,
    { $unset: { marca: []} }, 
    { useFindAndModify: false })
    .then(data => {
      if (data) {
        res.send({ message: "was delete successfully." });
      } else res.status(404).send({message: `Cannot delete with id=${id}. was not found!`});
    })
    .catch(err => {
      res.status(500).send({
        message: "Error delete id=" + id
      });
    });
};



//del nombre equipo------------------------------------------>

exports.deleteNombreEquipo = (req, res) => {

  const id = req.params.id;


  Inventario.findByIdAndUpdate(id,
    { $unset: { nombre_equipo: []} }, 
    { useFindAndModify: false })
    .then(data => {
      if (data) {
        res.send({ message: "delete successfully." });
      } else res.status(404).send({message: `Cannot delete id=${id}. was not found!`});
    })
    .catch(err => {
      res.status(500).send({
        message: "Error delete Inventario with id=" + id
      });
    });
};




//del tipo equipo------------------------------------------>


exports.deleteTipoEquipo = (req, res) => {

  const id = req.params.id;


  Inventario.findByIdAndUpdate(id,
    { $unset: { tipo_equipo: []} }, 
    { useFindAndModify: false })
    .then(data => {
      if (data) {
        res.send({ message: "delete successfully." });
      } else res.status(404).send({message: `Cannot delete Inventario with id=${id}. was not found!`});
    })
    .catch(err => {
      res.status(500).send({
        message: "Error delete id=" + id
      });
    });
};













