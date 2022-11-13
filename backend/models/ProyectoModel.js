module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      Numero: { type: numeber, unique: true },
      Titulo: String,
      FechaInicio: String,
      FechaEntrega: String,
      Valor: String,
      Requerido: String,
      TipoProyecto: String,
      Universidad: String,
      EtapaProyecto: String,
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const ProyectoModel = mongoose.model("ProyectoModel", schema);
  return ProyectoModel;
};
