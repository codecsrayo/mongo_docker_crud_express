const db = require("../models");
const EtapasModel = db.EtapasModel;

// Create and Save a new EtapasModel
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a EtapasModel
  const NewEtapasMode = new EtapasModel({
    Nombre: req.body.Nombre,
    estado: req.body.estado ? req.body.estado : false,
    AnteProyecto: req.body.AnteProyecto,
    ParcialFirst: req.body.ParcialFirst,
    ParcialSecond: req.body.ParcialSecond,
    EntregaFinal: req.body.EntregaFinal,
  });

  // Save EtapasModel in the database
  NewEtapasMode.save(NewEtapasMode)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the EtapasModel.",
      });
    });
};

// Retrieve all EtapasModel from the database.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre
    ? { Nombre: { $regex: new RegExp(Nombre), $options: "i" } }
    : {};

  EtapasModel.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving EtapasModel.",
      });
    });
};

// Find a single EtapasModel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  EtapasModel.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found EtapasModel with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving EtapasModel with id=" + id });
    });
};

// Update a EtapasModel by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  EtapasModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update EtapasModel with id=${id}. Maybe EtapasModel was not found!`,
        });
      } else res.send({ message: "EtapasModel was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating EtapasModel with id=" + id,
      });
    });
};

// Delete a EtapasModel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  EtapasModel.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete EtapasModel with id=${id}. Maybe EtapasModel was not found!`,
        });
      } else {
        res.send({
          message: "EtapasModel was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete EtapasModel with id=" + id,
      });
    });
};

// Delete all EtapasModel from the database.
exports.deleteAll = (req, res) => {
  EtapasModel.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} EtapasModel were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all EtapasModel.",
      });
    });
};

// Find all estado EtapasModel
exports.findAllPublished = (req, res) => {
  EtapasModel.find({ estado: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving EtapasModel.",
      });
    });
};
