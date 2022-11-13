const db = require("../models");
const UniversidadModel = db.UniversidadModel;

// Create and Save a new UniversidadModel
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a UniversidadModel
  const NewUniversidadModel = new UniversidadModel({
    Nombre: req.body.Nombre,
    Direccion: req.body.Ensayo,
    Telefono: req.body.Articulo,
  });

  // Save UniversidadModel in the database
  NewUniversidadModel.save(NewUniversidadModel)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the UniversidadModel.",
      });
    });
};

// Retrieve all estadoEquipos from the database.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre
    ? { Nombre: { $regex: new RegExp(Nombre), $options: "i" } }
    : {};

  UniversidadModel.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving estadoEquipos.",
      });
    });
};

// Find a single UniversidadModel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  UniversidadModel.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found UniversidadModel with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving UniversidadModel with id=" + id });
    });
};

// Update a UniversidadModel by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  UniversidadModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update UniversidadModel with id=${id}. Maybe UniversidadModel was not found!`,
        });
      } else
        res.send({ message: "UniversidadModel was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating UniversidadModel with id=" + id,
      });
    });
};

// Delete a UniversidadModel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  UniversidadModel.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete UniversidadModel with id=${id}. Maybe UniversidadModel was not found!`,
        });
      } else {
        res.send({
          message: "UniversidadModel was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete UniversidadModel with id=" + id,
      });
    });
};

// Delete all estadoEquipos from the database.
exports.deleteAll = (req, res) => {
  UniversidadModel.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} estadoEquipos were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all estadoEquipos.",
      });
    });
};

// Find all estado estadoEquipos
exports.findAllPublished = (req, res) => {
  UniversidadModel.find({ estado: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving estadoEquipos.",
      });
    });
};
