const { Tiendas, Productos } = require("../DB/db");

const postProducto = async (req, res) => {
  try {
    const { name, img, precio, descripcion, id } = req.body;
    const product = await Productos.create({ name, img, precio, descripcion });
    const store = await Tiendas.findByPk(id);
    store.addProduct(product);
    await store.save();
    res
      .status(200)
      .json({ message: "Producto relacionado con tienda exitosamente" });
  } catch (error) {
    console.log(error);
  }
};

const putProducto = async (req, res) => {
  try {
    const { name, img, precio, descripcion, id } = req.body;
    const product = await Productos.update({ name, img, precio, descripcion });
    const store = await Tiendas.findByPk(id);
    store.addProduct(product);
    await store.save();
    res
      .status(200)
      .json({ message: "Producto modificado y relacionado con tienda exitosamente" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  postProducto,
  putProducto,
};
