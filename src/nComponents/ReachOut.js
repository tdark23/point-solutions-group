import React from "react";
import { Link } from "react-router-dom";
import "./../styles/nComponents/reach.css";

function ReachOut() {
  return (
    <section>
      <div className="container cta">
        <div className="center-text">
          <div className="grid-8-col">
            <div className="content paddings">
              <div>
                <h2>
                  La reussite de votre événement
                  <br />
                  commence dès maintenant
                </h2>
              </div>
              <div>
                <p>
                  Ne tardez pas davantage et prenez contact avec nous dès
                  maintenant pour entamer une collaboration fructueuse et donner
                  vie à vos projets les plus ambitieux.
                </p>
              </div>
              <div className="top-margin-1">
                <Link className="button cta-button" to="/contact">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReachOut;
