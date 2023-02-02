const { Tiendas, Productos } = require("../DB/db");
const url = require("url");
// How to relate the two arrays that I have in the function below?
const tiendasDefault = async (req, res) => {
  // try {
  //   let listado = [
  //     {
  //       name: "lechuga",
  //       precio: 2,
  //     },
  //     {
  //       name: "papa",
  //       precio: 3,
  //     },
  //   ];
  //   let tiendas = [
  //     {
  //       name: "verduleria hermanos",
  //       ubicacion: "jujuy 510",
  //       rubro: "verduleria",
  //     },
  //     {
  //       name: "verduleria primos",
  //       ubicacion: "lamadrid 510",
  //       rubro: "verduleria",
  //     },
  //     {
  //       name: "carniceria hermanos",
  //       ubicacion: "jujuy 410",
  //       rubro: "carniceria",
  //     },
  //     {
  //       name: "supermercado rodo",
  //       ubicacion: "jujuy 515",
  //       rubro: "supermercado, verduleria",
  //     },
  //   ];
  //   const tiendasPromises = tiendas.map(async (tienda) => {
  //     let tiendaExist;
  //     tiendaExist = await Tiendas.findOne({ where: { name: tienda.name } });
  //     if (!tiendaExist) {
  //       return Tiendas.create({
  //         name: tienda.name,
  //         ubicacion: tienda.ubicacion,
  //         rubro: tienda.rubro,
  //       });
  //     }
  //   });
  //   let tiendasArray = await Promise.all(tiendasPromises);
  //   tiendasArray = tiendasArray.filter((tienda) => tienda);
  //   let productosPromises = listado.map(async (producto) => {
  //     let productoExist;
  //     productoExist = await Productos.findOne({
  //       where: { name: producto.name },
  //     });
  //     if (!productoExist) {
  //       return Productos.create({
  //         name: producto.name,
  //         precio: producto.precio,
  //       });
  //     }
  //   });
  //   let productosArray = await Promise.all(productosPromises);
  //   productosArray = productosArray.filter((producto) => producto);
  //   if (tiendasArray.length > 0) {
  //     tiendasArray.forEach(async (tienda) => {
  //       tienda.addProductos(productosArray);
  //     });
  //   }
  //   res.status(200).json(tiendas);
  // } catch (error) {
  //   console.log(error);
  // }
};

// const tiendasDefault = async (req, res) => {
//   try {
//     let listado = [
//       {
//         name: "lechuga",
//       },
//       {
//         name: "papa",
//       },
//     ];
//     let tiendas = [
//       {
//         name: "verduleria hermanos",
//         ubicacion: "jujuy 510",
//         rubro: "verduleria",
//       },

//       {
//         name: "verduleria primos",
//         ubicacion: "lamadrid 510",
//         rubro: "verduleria",
//       },
//       {
//         name: "carniceria hermanos",
//         ubicacion: "jujuy 410",
//         rubro: "carniceria",
//       },
//       {
//         name: "supermercado rodo",
//         ubicacion: "jujuy 515",
//         rubro: "supermercado, verduleria",
//       },
//     ];
//     const tiendaFound = await Tiendas.findAll();

//     if (tiendaFound.length > 0) {
//       console.log("tienda encontrada");
//       return;
//     }
//     tiendas.forEach(async (r) => {
//       await Tiendas.create({
//         name: r.name,
//         ubicacion: r.ubicacion,
//         rubro: r.rubro,
//       });
//     });
//     listado.forEach(async (e) => {
//       console.log(e.name);
//       await Productos.create({
//         name: e.name,
//       });
//     });
//     const productitos = await Productos.findAll();
//     const tienditas = await Tiendas.findAll();
//     setTimeout(async () => {

//       console.log(productitos, tienditas);
//       tienditas[0].addProductos(productitos[0]);

//     }, 5000);
//     setTimeout(async() => {
//       const esperar = await tienditas[0].getProductos(productitos[0]);

//       // const intermedia = await product.findAll({
//       //   where:{
//       //     id: "650dbda0-7ee6-4123-b189-f60078565677"
//       //   }
//       // })
//       console.log(esperar);
//     }, 7000);
//     res.status(200).json(tiendas);
//   } catch (error) {
//     console.log(error);
//   }
// };

const allinfo = async (req, res) => {
  try {
    const comercios = await Tiendas.findAll({ include: [Productos] });
    let enviar = comercios.map((e) => e.dataValues);
    res.status(200).json(enviar);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const tiendaDetail = async (req, res) => {
  let idTienda = req.params.id;

  try {
    const tiendasDb = await Tiendas.findOne({
      where: {
        id: idTienda,
      },
      include: [
        {
          model: Productos,
        },
      ],
    });

    res.status(200).json(tiendasDb);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const postTienda = async (req, res) => {
  try {
    let { name, ubicacion, rubro, whatsApp, horarioT, horarioM } =
      req.body;
    const img = req.file.path
console.log(req.file);
const imagenUrl = url.resolve(req.protocol + "://" + req.get("host"), img );

    let aux = ["Carniceria", "Verduleria", "Polleria"];
    if (aux.includes(rubro)) {
      const response = await Tiendas.create({
        name,
        img:imagenUrl,
        ubicacion,
        rubro,
        whatsApp,
        horariosT: horarioT,
        horariosM: horarioM,
      });
      res.status(200).json(response.dataValues);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  allinfo,
  tiendasDefault,
  tiendaDetail,
  postTienda,
};
