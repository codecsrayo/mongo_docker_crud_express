module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        nombre: String,
        estado: Boolean
      },
      { timestamps: true }
    );

    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const tipoEquipo = mongoose.model("tipo_equipo", schema);
    return tipoEquipo;
  };