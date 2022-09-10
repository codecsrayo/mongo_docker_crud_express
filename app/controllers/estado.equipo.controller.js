const db = require("../models");
const estadoEquipo = db.estado_equipo;

// Create and Save a new estadoEquipo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a estadoEquipo
  const estado_equipo = new estadoEquipo({
    nombre: req.body.nombre,
    estado: req.body.estado ? req.body.estado : false
  });

  // Save estadoEquipo in the database
  estado_equipo
    .save(estado_equipo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the estadoEquipo."
      });
    });
};

// Retrieve all estadoEquipos from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};

  estadoEquipo.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving estadoEquipos."
      });
    });
};

// Find a single estadoEquipo with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  estadoEquipo.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found estadoEquipo with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving estadoEquipo with id=" + id });
    });
};

// Update a estadoEquipo by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  estadoEquipo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update estadoEquipo with id=${id}. Maybe estadoEquipo was not found!`
        });
      } else res.send({ message: "estadoEquipo was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating estadoEquipo with id=" + id
      });
    });
};

// Delete a estadoEquipo with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  estadoEquipo.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete estadoEquipo with id=${id}. Maybe estadoEquipo was not found!`
        });
      } else {
        res.send({
          message: "estadoEquipo was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete estadoEquipo with id=" + id
      });
    });
};

// Delete all estadoEquipos from the database.
exports.deleteAll = (req, res) => {
  estadoEquipo.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} estadoEquipos were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all estadoEquipos."
      });
    });
};

// Find all estado estadoEquipos
exports.findAllPublished = (req, res) => {
  estadoEquipo.find({ estado: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving estadoEquipos."
      });
    });
};
