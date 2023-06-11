module.exports = app => {
  const pago = require('../controllers/pago.controller');
  
  var router = require("express").Router();
  router.post('/', pago.createPago);
  router.get('/:id', pago.getPagoById);
  router.get('/', pago.getAllPagos);
  router.put('/:id', pago.updatePago);
  router.delete('/:id', pago.deletePago);
  app.use("/api/pago", router);
};
