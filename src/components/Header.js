import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header class="header">
      <div class="container header__container">
        <div class="header__logo">
          <img
            class="header__img"
            src="https://image.ibb.co/kcVou6/path3000.png"
            alt="hello"
          />
          <h1 class="header__title">
            Bricks<span class="header__light">.io</span>
          </h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
