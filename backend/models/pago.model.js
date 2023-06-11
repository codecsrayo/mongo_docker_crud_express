module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      monto: { type: Number, required: true },
      beneficiario: { type: String, required: true },
      descripcion: { type: String, required: true },
      referenciaArticulo: { type: mongoose.Schema.Types.ObjectId, ref: 'inventario', autopopulate: true } // Referencia al artículo
    },
    { timestamps: true }
  );
  const Pago = mongoose.model('pago', schema);
  return Pago;
};
