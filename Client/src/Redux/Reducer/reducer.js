import jwtDecode from "jwt-decode";

import {
  ADMIN,
  CERRAR,
  DETALLES,
  FILTRAR,
  GET_TIENDAS,
  GET_USER,
  PRE_DATOS,
  SEARCH_STORE,
} from "../Actions/actions";

const initialState = {
  comercios: [],
  backup: [],
  detalle: {},
  user: "",
  token: "",
};

const rootRouter = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIENDAS:
      return {
        ...state,
        comercios: action.payload,
        backup: action.payload,
      };
    case PRE_DATOS:
      return {
        ...state,
      };
    case FILTRAR:
      const aux = state.comercios.filter((e) =>
        e.rubro.includes(action.payload)
      );

      if (action.payload.length) {
        console.log("entre aqui");
        return {
          ...state,
          comercios: aux,
        };
      } else {
        return {
          ...state,
          comercios: state.backup,
        };
      }
    case DETALLES:
      return {
        ...state,
        detalle: action.payload,
      };
    //e.productos.filter(r=>r.name.toLowerCase().includes(action.payload.toLowerCase())
    case SEARCH_STORE:
      if (action.payload) {
        let auxfi = state.comercios.filter(
          (e) =>
            e.name.toLowerCase().includes(action.payload) ||
            e.productos.some((r) => r.name.includes(action.payload))
        );
        console.log(auxfi);
        return {
          ...state,
          comercios: auxfi,
        };
      } else {
        return {
          ...state,
          comercios: state.backup,
        };
      }
    case ADMIN:
      const admin = jwtDecode(action.payload);

      return {
        ...state,
        user: admin,
      };
    case CERRAR:
      sessionStorage.removeItem("token");
      return {
        ...state,
        user: {},
      };
    case GET_USER:
      const token = sessionStorage.getItem("token");
      const decodificado = jwtDecode(token);
      return {
        ...state,
        user: decodificado,
      };

    default:
      return state;
  }
};

export default rootRouter;
