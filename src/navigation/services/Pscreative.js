import React from "react";
import { ServicePagePrototype } from "../../components";
import { pscreativedetails } from "../../utils/serviceDetails";
import ReachOut from "../../nComponents/ReachOut";

function Pscreative () {
    return (
        <>
            <ServicePagePrototype serviceDatas={pscreativedetails} is_description_photo = {true}/>
            <ReachOut/>
        </>
    )
}

export default Pscreative;