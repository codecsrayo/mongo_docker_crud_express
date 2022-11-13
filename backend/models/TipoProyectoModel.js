module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      Nombre: String,
      Ensayo: String,
      Articulo: String,
      Monografia: String,
      TrabajoFinalPregrado: String,
      TrabajoFinalesPecializacion: String,
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const TipoProyectoModel = mongoose.model("TipoProyectoModel", schema);
  return TipoProyectoModel;
};
