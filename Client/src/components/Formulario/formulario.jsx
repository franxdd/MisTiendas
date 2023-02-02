import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTienda } from "../../Redux/Actions/actions";
function Formulario() {
  const dispatch = useDispatch();

  const [form, setForm] = useState();
  const data = new FormData();
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleImage = (e)=>{
    console.log(e.target.files);
    if (e.target.files !== null) {
      setForm({
        ...form, img: e.target.files[0]
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    data.append("img",form.img);
    data.append("name",form.name);
    data.append("ubicacion",form.ubicacion);
    data.append("rubro",form.rubro);
    data.append("whatsApp",form.whatsApp);
    data.append("horarioM",form.horarioM);
    data.append("horarioT",form.horarioT);
    dispatch(postTienda(form));
  };
  console.log(form);
  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="mb-3 xl:w-96">
        <input
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name={"name"}
          onChange={(e) => handleInput(e)}
          placeholder="nombre"
        />
        <input
        
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
        
          onChange={(e) => handleImage(e)}
        />
        <input
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name={"ubicacion"}
          onChange={(e) => handleInput(e)}
          placeholder="ubicacion"
        />
        <input
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name={"rubro"}
          onChange={(e) => handleInput(e)}
          placeholder="rubro"
        />
        <input
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name={"whatsApp"}
          onChange={(e) => handleInput(e)}
          placeholder="whatsapp"
        />
        <input
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name={"horarioM"}
          onChange={(e) => handleInput(e)}
          placeholder="horario Mañana"
        />
        <input
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name={"horarioT"}
          onChange={(e) => handleInput(e)}
          placeholder="horario Tarde"
        />
        <button
          type="submit"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Primary
        </button>
      </div>
    </form>
  );
}

export default Formulario;
