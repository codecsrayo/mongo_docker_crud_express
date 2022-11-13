const db = require("../models");
const ProyectoModel = db.ProyectoModel;

// Create and Save a new ProyectoModel
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Titulo) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a ProyectoModel
  const NewProyectoModel = new ProyectoModel({
    Titulo: req.body.Titulo,
    FechaInicio: req.body.FechaInicio,
    FechaEntrega: req.body.FechaEntrega,
    Valor: req.body.Valor,
    Requerido: req.body.Requerido,
    TipoProyecto: req.body.TipoProyecto,
    Universidad: req.body.Universidad,
    EtapaProyecto: req.body.EtapaProyecto,
  });

  // Save ProyectoModel in the database
  NewProyectoModel.save(NewProyectoModel)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the ProyectoModel.",
      });
    });
};

// Retrieve all estadoEquipos from the database.
exports.findAll = (req, res) => {
  const Titulo = req.query.Titulo;
  var condition = Titulo
    ? { Titulo: { $regex: new RegExp(Titulo), $options: "i" } }
    : {};

  ProyectoModel.find(condition)
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

// Find a single ProyectoModel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProyectoModel.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found ProyectoModel with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving ProyectoModel with id=" + id });
    });
};

// Update a ProyectoModel by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  ProyectoModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update ProyectoModel with id=${id}. Maybe ProyectoModel was not found!`,
        });
      } else res.send({ message: "ProyectoModel was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ProyectoModel with id=" + id,
      });
    });
};

// Delete a ProyectoModel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ProyectoModel.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ProyectoModel with id=${id}. Maybe ProyectoModel was not found!`,
        });
      } else {
        res.send({
          message: "ProyectoModel was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete ProyectoModel with id=" + id,
      });
    });
};

// Delete all estadoEquipos from the database.
exports.deleteAll = (req, res) => {
  ProyectoModel.deleteMany({})
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
  ProyectoModel.find({ estado: true })
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
