const db = require('../models');
const Pago = db.pago;

exports.createPago = async (req, res) => {
  try {
    const pago = new Pago(req.body);
    await pago.save();
    res.status(201).json(pago);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPagoById = async (req, res) => {
  try {
    const pago = await Pago.findById(req.params.id);
    if (pago) {
      res.json(pago);
    } else {
      res.status(404).json({ error: 'Pago no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePago = async (req, res) => {
  try {
    const pago = await Pago.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (pago) {
      res.json(pago);
    } else {
      res.status(404).json({ error: 'Pago no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePago = async (req, res) => {
  try {
    const pago = await Pago.findByIdAndDelete(req.params.id);
    if (pago) {
      res.json({ message: 'Pago eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Pago no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
