import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTienda } from "../../Redux/Actions/actions";
function Formulario() {
  const dispatch = useDispatch();
  // const initialValue = {
  //   name: "",
  //   img: "",
  //   ubicacion: "",
  //   rubro: "",
  //   whatsApp: "",
  //   horarios: "",
  // };
  const [form, setForm] = useState();

  const handleInput = (e) => {
    if (e.target.id === "img") {
      const file = e.target.files[0];

      setForm({
        ...form,
        img: file,
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
          id="img"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
          name={"img"}
          onChange={(e) => handleInput(e)}
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
