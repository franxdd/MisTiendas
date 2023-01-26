import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Detalles from "./components/Detalles/Detalles";
import Formulario from "./components/Formulario/formulario";
import Home from "./components/Home/Home";
import LoginAdmin from "./components/LoginAdmin/LoginAdmin";
import Nav from "./components/Nav/Nav";
import { precarga, usuarioDefault } from "./Redux/Actions/actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(precarga());
  }, [dispatch]);
  useEffect(() => {
    dispatch(usuarioDefault());
  }, [dispatch]);

 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />}></Route>
          <Route path=":id" element={<Detalles/>}></Route>
          <Route path="iniciosesion" element={<LoginAdmin/>}></Route>
          <Route path="formulario" element={<Formulario/>}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
