const db = require("../models");
const Usuarios = db.usuarios;

// Create and Save a new Usuarios
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Usuarios
  const usuarios = new Usuarios({
    nombre: req.body.nombre,
    email: req.body.email,
    estado: req.body.estado ? req.body.estado : false
  });

  // Save Usuarios in the database
  usuarios
    .save(usuarios)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuarios."
      });
    });
};

// Retrieve all Usuarioss from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};

  Usuarios.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Usuarioss."
      });
    });
};

// Find a single Usuarios with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuarios.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Usuarios with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Usuarios with id=" + id });
    });
};

// Update a Usuarios by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Usuarios.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Usuarios with id=${id}. Maybe Usuarios was not found!`
        });
      } else res.send({ message: "Usuarios was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Usuarios with id=" + id
      });
    });
};

// Delete a Usuarios with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Usuarios.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Usuarios with id=${id}. Maybe Usuarios was not found!`
        });
      } else {
        res.send({
          message: "Usuarios was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Usuarios with id=" + id
      });
    });
};

// Delete all Usuarioss from the database.
exports.deleteAll = (req, res) => {
  Usuarios.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Usuarioss were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Usuarioss."
      });
    });
};

// Find all estado Usuarioss
exports.findAllPublished = (req, res) => {
  Usuarios.find({ estado: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Usuarioss."
      });
    });
};
