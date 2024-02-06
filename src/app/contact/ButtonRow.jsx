import React from "react";
import { phoneSvg } from "../../../../base/SVG";

export default function ButtonRow({ type }) {
  return (
    <>
      {type === "type1" && (
        <div className="button__row">
          <a href="tel:020 - 370 91 51" className="button secondary phone blue">
            {phoneSvg}
            020 - 370 91 51
          </a>
          <button type="button" className="button primary big">
            Offerte aanvragen
          </button>
        </div>
      )}
      {type === "type2" && (
        <div className="button__row">
          <a href="#" className="button link">
            Meer over Beton cire
          </a>
          <button className="button primary">Offerte aanvragen</button>
        </div>
      )}
    </>
  );
}
