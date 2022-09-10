const express = require("express");
const cors = require("cors");
const logger = require('morgan');
const app = express();

var corsOptions = {
  origin: "http://localhost:3100"
};

app.use(cors(corsOptions));
app.use(logger('dev'));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.router")(app);
require("./app/routes/estado.equipo.router")(app);
require("./app/routes/inventario.router")(app);
require("./app/routes/marcas.router")(app);
require("./app/routes/tipo.equipo.router")(app);
require("./app/routes/usuarios.router")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

