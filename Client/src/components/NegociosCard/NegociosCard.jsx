import React from "react";
import { Link } from "react-router-dom";
function NegociosCard({ id, name, ubicacion }) {
  return (
    <Link to={`/${id}`}>
      <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
      <p className="text-gray-700 text-base mb-4">
        {ubicacion}
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
    </Link>
  );
}

export default NegociosCard;
