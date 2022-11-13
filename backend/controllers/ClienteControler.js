const db = require("../models");
const ClienteModel = db.ClienteModel;

// Create and Save a new ClienteModel
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a ClienteModel
  const NewClienteModel = new ClienteModel({
    Nombre: req.body.Nombre,
    Email: req.body.Email ? req.body.Email : false,
  });

  // Save ClienteModel in the database
  NewClienteModel.save(NewClienteModel)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ClienteModel.",
      });
    });
};

// Retrieve all ClienteModels from the database.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre
    ? { Nombre: { $regex: new RegExp(Nombre), $options: "i" } }
    : {};

  ClienteModel.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ClienteModels.",
      });
    });
};

// Find a single ClienteModel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ClienteModel.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found ClienteModel with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving ClienteModel with id=" + id });
    });
};

// Update a ClienteModel by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  ClienteModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update ClienteModel with id=${id}. Maybe ClienteModel was not found!`,
        });
      } else res.send({ message: "ClienteModel was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ClienteModel with id=" + id,
      });
    });
};

// Delete a ClienteModel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ClienteModel.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ClienteModel with id=${id}. Maybe ClienteModel was not found!`,
        });
      } else {
        res.send({
          message: "ClienteModel was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete ClienteModel with id=" + id,
      });
    });
};

// Delete all ClienteModels from the database.
exports.deleteAll = (req, res) => {
  ClienteModel.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} ClienteModels were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all ClienteModels.",
      });
    });
};

// Find all Email ClienteModels
exports.findAllPublished = (req, res) => {
  ClienteModel.find({ Email: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ClienteModels.",
      });
    });
};
