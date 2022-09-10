module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        nombre: String,
        email: String,
        estado: Boolean
      },
      { timestamps: true }
    );

    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Usuarios = mongoose.model("usuarios", schema);
    return Usuarios;
  };