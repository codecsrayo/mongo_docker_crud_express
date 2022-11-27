const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;


db.TipoProyectoModel = require("./TipoProyectoModel")(mongoose);
db.ClienteModel = require("./ClienteModel")(mongoose);
db.UniversidadModel = require("./UniversidadModel")(mongoose);
db.EtapasModel = require("./EtapasModel")(mongoose);
db.ProyectoModel = require("./ProyectoModel")(mongoose);

module.exports = db;
