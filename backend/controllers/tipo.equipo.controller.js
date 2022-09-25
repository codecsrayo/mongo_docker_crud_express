const db = require("../models");
const tipoEquipo = db.tipo_equipo;

// Create and Save a new tipoEquipo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a tipoEquipo
  const tipo_equipo = new tipoEquipo({
    nombre: req.body.nombre,
    estado: req.body.estado ? req.body.estado : false
  });

  // Save tipoEquipo in the database
  tipo_equipo
    .save(tipo_equipo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tipoEquipo."
      });
    });
};

// Retrieve all tipoEquipos from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};

  tipoEquipo.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tipoEquipos."
      });
    });
};

// Find a single tipoEquipo with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  tipoEquipo.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found tipoEquipo with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving tipoEquipo with id=" + id });
    });
};

// Update a tipoEquipo by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  tipoEquipo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update tipoEquipo with id=${id}. Maybe tipoEquipo was not found!`
        });
      } else res.send({ message: "tipoEquipo was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating tipoEquipo with id=" + id
      });
    });
};

// Delete a tipoEquipo with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  tipoEquipo.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete tipoEquipo with id=${id}. Maybe tipoEquipo was not found!`
        });
      } else {
        res.send({
          message: "tipoEquipo was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete tipoEquipo with id=" + id
      });
    });
};

// Delete all tipoEquipos from the database.
exports.deleteAll = (req, res) => {
  tipoEquipo.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} tipoEquipos were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tipoEquipos."
      });
    });
};

// Find all estado tipoEquipos
exports.findAllPublished = (req, res) => {
  tipoEquipo.find({ estado: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tipoEquipos."
      });
    });
};
