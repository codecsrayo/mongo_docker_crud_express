module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      monto: { type: Number, required: true },
      beneficiario: { type: String, required: true },
      descripcion: { type: String },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Pago = mongoose.model("pago", schema);
  return Pago;
};