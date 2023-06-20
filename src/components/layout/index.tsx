import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <React.Fragment>
      <Link to="/">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeAPI logo"
          className="mx-auto w-48"
        />
      </Link>

      <br />
      <br />

      <Outlet />
    </React.Fragment>
  );
}
