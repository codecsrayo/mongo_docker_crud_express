const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.estado_equipo = require("./estado.equipo.model.js")(mongoose);
db.tipo_equipo = require("./tipo.equipo.model.js")(mongoose);
db.marcas = require("./marcas.model.js")(mongoose);
db.inventario = require("./inventario.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);

module.exports = db;
