module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      serial: { type: String, unique: true },
      modelo: { type: String, unique: true },
      descripcion: String,
      foto: String,
      color: String,
      precio: Number,
      usuario: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          autopopulate: true,
        },
      ],
      marca: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "marcas",
          autopopulate: true,
        },
      ],
      nombre_equipo: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "estado_equipo",
          autopopulate: true,
        },
      ],
      tipo_equipo: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "tipo_equipo",
          autopopulate: true,
        },
      ],
    },
    { timestamps: true }
  );

  schema.plugin(require("mongoose-autopopulate"));
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Inventario = mongoose.model("inventario", schema);
  return Inventario;
};
