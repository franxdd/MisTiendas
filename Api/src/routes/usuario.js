const { Router } = require("express");
const route = Router();
const { postLogin, createUser, getProfile } = require("../services/usuario.js");
require("dotenv").config();

route.post("/login", postLogin);
route.get("/default", createUser);
// route.get("/profile", getProfile);

module.exports = route;
