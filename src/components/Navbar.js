import React from "react";

export default function Navbar() {
  return (
    <div class="header__menu">
      <nav id="navbar" class="header__nav collapse">
        <ul class="header__elenco">
          <li class="header__el">
            <a href="#" class="header__link">
              Home
            </a>
          </li>
          <li class="header__el">
            <a href="#" class="header__link">
              Pricing
            </a>
          </li>
          <li class="header__el">
            <a href="#" class="header__link">
              Success stories
            </a>
          </li>
          <li class="header__el">
            <a href="#" class="header__link">
              Blog
            </a>
          </li>
          <li class="header__el">
            <a href="#" class="header__link">
              Contact us
            </a>
          </li>
          <li class="header__el header__el--blue">
            <a class="btn btn--white">Sign In →</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
