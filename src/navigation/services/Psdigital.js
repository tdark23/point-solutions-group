import React from "react";
import { ServicePagePrototype } from "../../components";
import { psdigitaldetails } from "../../utils/serviceDetails";
import ReachOut from "../../nComponents/ReachOut";

function Psdigital() {
  return <>
    <ServicePagePrototype
    serviceDatas={psdigitaldetails}
    is_dmark = { true }
    />
    <ReachOut/>
  </>;
}

export default Psdigital;
