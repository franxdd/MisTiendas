import React from "react";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../Redux/Actions/actions";

function Nav() {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <main>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="navbar-togglertext-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline md:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item px-2">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  <button>Inicio</button>
                </Link>
              </li>

              <li className="nav-item pr-2">
                {userReducer.isAdmin === true ? (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/formulario"}
                  >
                    <button>formulario</button>
                  </Link>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <SearchBar />
        </div>
      </nav>
      <Outlet />
    </main>
  );
}

export default Nav;
