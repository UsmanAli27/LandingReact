import React from "react";

export default function PricingCard(props) {
  const { features, name } = props;
  return (
    <div class="price-box price-box--violet">
      <div class="price-box__wrap">
        <div class="price-box__img"></div>
        <h1 class="price-box__title">{name}</h1>
        <p class="price-box__people">100 - 500 people</p>
        <h2 class="price-box__discount">
          <span class="price-box__dollar">$</span>149
          <span class="price-box__discount--light">/mo</span>
        </h2>
        <h3 class="price-box__price">$225/mo</h3>
        <p class="price-box__feat">Features</p>
        <ul class="price-box__list dfdf">
          {features.map((feature) => (
            <li class="price-box__list-el">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
