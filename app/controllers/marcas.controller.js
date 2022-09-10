const db = require("../models");
const Marcas = db.marcas;

// Create and Save a new Marcas
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Marcas
  const marcas = new Marcas({
    nombre: req.body.nombre,
    estado: req.body.estado ? req.body.estado : false
  });

  // Save Marcas in the database
  marcas
    .save(marcas)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Marcas."
      });
    });
};

// Retrieve all Marcass from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};

  Marcas.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving marcass."
      });
    });
};

// Find a single Marcas with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Marcas.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Marcas with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Marcas with id=" + id });
    });
};

// Update a Marcas by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Marcas.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Marcas with id=${id}. Maybe Marcas was not found!`
        });
      } else res.send({ message: "Marcas was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Marcas with id=" + id
      });
    });
};

// Delete a Marcas with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Marcas.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Marcas with id=${id}. Maybe Marcas was not found!`
        });
      } else {
        res.send({
          message: "Marcas was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Marcas with id=" + id
      });
    });
};

// Delete all Marcass from the database.
exports.deleteAll = (req, res) => {
  Marcas.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Marcass were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all marcass."
      });
    });
};

// Find all estado Marcass
exports.findAllPublished = (req, res) => {
  Marcas.find({ estado: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving marcass."
      });
    });
};
