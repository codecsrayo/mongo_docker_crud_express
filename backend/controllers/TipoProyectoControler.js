const db = require("../models");
const TipoProyectoModel = db.TipoProyectoModel;

// Create and Save a new TipoProyectoModel
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a TipoProyectoModel
  const NewTipoProyectoModel = new TipoProyectoModel({
    Nombre: req.body.Nombre,
    Ensayo: req.body.Ensayo,
    Articulo: req.body.Articulo,
    Monografia: req.body.Monografia,
    TrabajoFinalPregrado: req.body.TrabajoFinalPregrado,
    TrabajoFinalesPecializacion: req.body.TrabajoFinalesPecializacion,
  });

  // Save TipoProyectoModel in the database
  NewTipoProyectoModel.save(NewTipoProyectoModel)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the TipoProyectoModel.",
      });
    });
};

// Retrieve all estadoEquipos from the database.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre
    ? { Nombre: { $regex: new RegExp(Nombre), $options: "i" } }
    : {};

  TipoProyectoModel.find(condition)
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

// Find a single TipoProyectoModel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  TipoProyectoModel.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found TipoProyectoModel with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving TipoProyectoModel with id=" + id });
    });
};

// Update a TipoProyectoModel by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  TipoProyectoModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update TipoProyectoModel with id=${id}. Maybe TipoProyectoModel was not found!`,
        });
      } else
        res.send({ message: "TipoProyectoModel was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating TipoProyectoModel with id=" + id,
      });
    });
};

// Delete a TipoProyectoModel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  TipoProyectoModel.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete TipoProyectoModel with id=${id}. Maybe TipoProyectoModel was not found!`,
        });
      } else {
        res.send({
          message: "TipoProyectoModel was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete TipoProyectoModel with id=" + id,
      });
    });
};

// Delete all estadoEquipos from the database.
exports.deleteAll = (req, res) => {
  TipoProyectoModel.deleteMany({})
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
  TipoProyectoModel.find({ estado: true })
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
