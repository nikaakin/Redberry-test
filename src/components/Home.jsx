import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../assets/home.png";
import Logo from "../assets/logo.png";
import SecondLogo from "../assets/logo2.png";

function Home() {
  return (
    <div className="home">
      <header className="home__header">
        <img src={Logo} alt="Logo" className="home__logo" />
      </header>

      <img src={SecondLogo} alt="Home logo 2" className="home__logo-2" />
      <img src={HomeImg} alt="Home image" className="home__img" />

      <Link to={"form/info"} className="absolute-center">
        <button className="btn btn--black  font-large">
          რეზიუმეს დამატება
        </button>
      </Link>
    </div>
  );
}

export default Home;
