import React from "react";
import { urlFor } from "../utils/UrlImage";

export default function Photo({ImageList}) {
  return (
    <div className="photo">
      <div className="photo__inner">
        {ImageList.map((item, index) => {
          return (
            <div className="photo__item" key={index}>
              <div className="photo__item-image">
                <img src={urlFor(item).url()} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <button className="button primary">
        Vraag vrijblijvend een offerte aan
      </button>
    </div>
  );
}
