import React from "react";
import PricingCard from "./pricingCard";

export default function Pricing() {
  const arr1 = ["Alpha1", "Brave1", "Charlie", "Delta1"];
  const arr2 = ["Alpha2", "Brave2", "Charlie", "Delta2"];
  const arr3 = ["Alpha3", "Brave3", "Charlie", "Delta3"];
  return (
    <React.Fragment>
      <div class="sect sect--padding-bottom">
        <div class="container ">
          <div class="row row--center">
            <h1 class="row__title">Pricing</h1>
            <h2 class="row__sub">What fits your business the best?</h2>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div class="d-flex-row">
            <PricingCard name="Business" features={arr1} />
            <PricingCard name="Science" features={arr2} />
            <PricingCard name="Tour" features={arr3} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
