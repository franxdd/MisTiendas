import axios from "axios";
export const GET_TIENDAS = "GET_TIENDAS";
export const PRE_DATOS = "PRE_DATOS";
export const DETAIL = "DETAIL";
export const FILTRAR = "FILTRAR";
export const DETALLES = "DETALLES";
export const SEARCH_STORE = "SEARCH_STORE";
export const ADMIN = "ADMIN";
export const GET_USER = "GET_USER";
export const CERRAR = "CERRAR";
export const CREADO = "CREADO";

export const getTiendas = () => {
  return async function (dispatch) {
    try {
      let tienda = await axios.get(`http://localhost:3001/tiendas`);

      return dispatch({
        type: GET_TIENDAS,
        payload: tienda.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const precarga = () => {
  return async function (dispatch) {
    try {
      await axios.get(`http://localhost:3001/tiendas/precarga`);
      return dispatch({
        type: PRE_DATOS,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const details = (id) => {
  return async function (dispatch) {
    console.log(id);
    try {
      let detalles = await axios.get(`http://localhost:3001/tiendas/${id}`);

      return dispatch({
        type: DETALLES,
        payload: detalles.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filtrar = (payload) => {
  return function (dispatch) {
    try {
      dispatch({
        type: FILTRAR,
        payload: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchBar = (input) => {
  return async function (dispatch) {
    dispatch({
      type: SEARCH_STORE,
      payload: input,
    });
  };
};
export const usuarioDefault = () => {
  return async function (dispatch) {
    let creado = await axios.get("http://localhost:3001/usuario/default");

    dispatch({
      type: SEARCH_STORE,
    });
  };
};

export const loginAdmin = (payload) => {
  return async function (dispatch) {
    try {
      let logueado = await axios.post(
        "http://localhost:3001/usuario/login",
        payload
      );
      if (logueado && logueado.data) {
        sessionStorage.setItem("token", JSON.stringify(logueado.data));
      }
      console.log(logueado);
      return dispatch({
        type: ADMIN,
        payload: logueado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUser = () => {
  return async function (dispatch) {
    return dispatch({
      type: GET_USER,
    });
  };
};
export const cerrar = () => {
  return async function (dispatch) {
    return dispatch({
      type: CERRAR,
    });
  };
};
export const postTienda = (payload) => {
  try {
    return async function (dispatch) {
      console.log(payload);
      let creado = axios.post("http://localhost:3001/tiendas/crear", payload);
      console.log(creado.data);
      // return dispatch({
      //   type:CREADO,
      //   payload: creado.data
      // })
    };
  } catch (error) {
    console.log(error);
  }
};
