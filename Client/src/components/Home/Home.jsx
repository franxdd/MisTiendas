import React from "react";
import { useEffect } from "react";
import Filtros from "../Filtros/Filtros";
import { useDispatch, useSelector } from "react-redux";
import { getTiendas } from "../../Redux/Actions/actions";
import NegociosCard from "../NegociosCard/NegociosCard";

function Home() {
  const negocios = useSelector((state) => state.comercios);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTiendas());
  }, [dispatch]);

  return (
    <div className="w-full bg-red-600 sm:flex md:flex">
      <Filtros />
      <div className="grid grid-cols-2 md:w-3/4 md:flex md:flex-col md:text-lg">
        {negocios &&
          negocios.map((e, index) => {
            return (
              <NegociosCard
                key={index}
                id={e.id}
                name={e.name}
                ubicacion={e.ubicacion}
                img={e.img}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
