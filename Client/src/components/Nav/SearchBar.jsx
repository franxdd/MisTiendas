import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBar } from "../../Redux/Actions/actions";
import { useLocation } from "react-router-dom";

function SearchBar() {
  let location = useLocation();

  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBar(input));
    console.log(input);
    setInput("");
  };
  return (
    <>
      {location.pathname !== "/iniciosesion" && location.pathname !== "/formulario" ? (
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input
                type="text"
                placeholder="Buscar.."
                onChange={(e) => handleSearch(e)}
                value={input}
              />
              <button
                className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      ) : (
        <></>
      )}
    </>
  );
}

export default SearchBar;
