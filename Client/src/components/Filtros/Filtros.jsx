import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filtrar } from "../../Redux/Actions/actions";

function Filtros() {
  const dispatch = useDispatch()
  const [check, setCheck] = useState({
    rubro: [],
  });
  const handleCheck = (e) => {

    if (e.target.checked === true) {
      var nuevo = [...check.rubro, e.target.value.toLowerCase()];

      setCheck({
        ...check,
        rubro: nuevo.filter((valor, indice) => {
          return nuevo.indexOf(valor) === indice;
        }),
      });
    } else {
      setCheck({
        rubro: check.rubro.filter((r) => r !== e.target.value.toLowerCase()),
      });
    }
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
   dispatch(filtrar(check.rubro)) 
  }

  return (
    <div className="w-full bg-green-600 sm:w-1/4">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="checkbox"
          onChange={(e) => handleCheck(e)}
          value="verduleria"
          name="verduleria"
        />
        Verduleria <br />
        <input
          type="checkbox"
          onChange={(e) => handleCheck(e)}
          value="Carniceria"
          name="Carniceria"
        />
        Carniceria <br />
        <input
          type="checkbox"
          onChange={(e) => handleCheck(e)}
          value="Supermercado"
          name="Supermercado"
        />
        Supermercado <br />
        <button type="submit">filtrar</button>
      </form>
    </div>
  );
}

export default Filtros;
