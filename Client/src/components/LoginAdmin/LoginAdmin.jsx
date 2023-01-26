import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, cerrar } from "../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginAdmin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(null);
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    dispatch(loginAdmin(userData));
    setTimeout(() => {
      const tokenn = sessionStorage.getItem("token");
      // console.log(tokenn);
      if (tokenn) {
        navigate("/");
      }
    }, 1500);
  };
  const logout = (e) => {
    e.preventDefault();
    dispatch(cerrar());
  };
  useEffect(() => {
    if (userReducer.isAdmin === true) {
      setAdmin(
        <button
          onClick={(e) => logout(e)}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
          Logout
        </button>
      );
    } else {
      setAdmin(null);
    }
  }, [userReducer]);

  return (
    <>
      {admin ? (
        admin
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
          <h2 className="text-lg font-medium mb-4">Iniciar sesión</h2>
          <label className="block mb-2">
            <span className="text-sm font-medium text-gray-700">
              Nombre de usuario
            </span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input mt-1 block w-full"
              placeholder="Ingresa tu nombre de usuario"
            />
          </label>
          <label className="block mb-2">
            <span className="text-sm font-medium text-gray-700">
              Contraseña
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input mt-1 block w-full"
              placeholder="Ingresa tu contraseña"
            />
          </label>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Iniciar sesión
          </button>
        </form>
      )}
    </>
  );
}

export default LoginAdmin;
