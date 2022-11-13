module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      Nombre: String,
      Email: String,
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const ClienteModels = mongoose.model("ClienteModels", schema);
  return ClienteModels;
};
