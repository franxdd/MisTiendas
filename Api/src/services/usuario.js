const { Usuario } = require("../DB/db");
const { DB_USER_CUENTA, DB_PASSWORD_CUENTA, SECRET_KEY } = process.env;
const jwt = require("jsonwebtoken");
const { createTokens } = require("../utils/jwt");
async function createUser(req, res) {
  try {
    const userExist = await Usuario.findOne({ where: { username: "fran" } });
    if (userExist) {
      console.log("Ya existe un usuario con ese nombre de usuario");
      const payload = {
        userId: userExist.id,
        username: userExist.username,
        isAdmin: userExist.isAdmin
      };
      const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
      res.status(200).json({token});
    } else {
      const user = await Usuario.create({
        username: DB_USER_CUENTA,
        password: DB_PASSWORD_CUENTA,
        isAdmin: true
      });

      console.log(`Usuario ${user.username} ha sido creado con éxito`);
      const payload = {
        userId: user.id,
        username: user.username,
        isAdmin: user.isAdmin
      };
      const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
      res.status(200).json({token});
    }
  } catch (error) {
    console.log(error);
  }
}

const postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Usuario.findOne({
      where: {
        username: username,
      },
    });
    if (!user) {
      return res.status(405);
    }
    const dbPass = user.dataValues.password;
    if (dbPass !== password) {
      res.status(401).send("Contraseña no coincide");
    } else {
      const accessToken = createTokens(user);
      res.status(200).cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 60,
      });
      res.status(200).json(accessToken);
    }
  } catch (error) {
    console.log(error);
    // res.status(400).json(error);
  }
};
// const postLogin = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await Usuario.findOne({
//       where: {
//         username: username,
//       },
//     });
//     if (!user) {
//       return res.status(405);
//     }
//     const dbPass = user.dataValues.password;
//     if (dbPass !== password) {
//       res.status(401).send("Contraseña no coincide");
//     } else {
//       const payload = {
//         userId: user.id,
//         username: user.username,
//         isAdmin: user.isAdmin
//       };
//       const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
//       res.status(200).json({token});
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };



module.exports = {
  postLogin,
  createUser,
  // getProfile,
};
