import React from "react";
import Modal from "./Modal";
import { cancel } from "../SVG";

export default function Cookie({ setCookie }) {
  return (
    <Modal setModal={setCookie}>
      <div className="modalCookie">
        <div className="modalCookie__close" onClick={() => setCookie(false)}>
          {cancel}
        </div>
        <div className="modalCookie__inner">
          <h2 className="big">
            Wij respecteren <br /> uw privacy
          </h2>
          <p>
            Wij verkopen uw data niet aan derden en maken geen gebruik van
            advertenties op onze website.
          </p>
          <p>
            Onze website maakt gebruik van cookies om de gebruikerservaring voor
            bezoekers te optimaliseren.
          </p>
          <button className="button bluebt">Akkoord</button>
        </div>
      </div>
    </Modal>
  );
}
