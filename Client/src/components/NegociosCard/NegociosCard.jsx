import React from "react";
import { Link } from "react-router-dom";
function NegociosCard({ id, name, ubicacion,img }) {

  return (
    <Link to={`/${id}`}>
      <div className="flex justify-center">
        <img className="rounded-t-lg" src={img} alt="profile" />
        <div className="rounded-lg shadow-lg bg-white w-full ">
          <div className="p-2">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-700 text-base mb-4">{ubicacion}</p>
           
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NegociosCard;
