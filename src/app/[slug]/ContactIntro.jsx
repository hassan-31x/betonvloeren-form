import React from "react";
import { urlFor } from "../utils/UrlImage";

export default function ContactIntro({mainHeading,backgroundImage}) {
  return (
    <div className="contact__intro">
      <div className="contact__intro-bg">
        <img src={urlFor(backgroundImage).url()} alt="" />
      </div>
      <div className="auto__container">
        <div className="contact__intro-inner">
          <h2 className="uniq">
            {mainHeading}
          </h2>
          <div className="promo">
            <div className="promo__text">
              <strong>Best beoordeelde</strong> betonvloeren specialist met{" "}
              <a href="#">200+ reviews</a>!
            </div>
            <img src="images/starsDark.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
