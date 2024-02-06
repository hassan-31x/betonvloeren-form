"use client"

import React from "react";

export default function Difference() {
  return (
    <section className="difference">
      <div className="auto__container">
        <div className="difference__inner">
          <div className="difference__title">
            <h2 className="big bold">Ervaar het verschil</h2>
            <h3 className="sm reg">Vraag een vrijblijvende offerte aan</h3>
            <h6 className="big">
              Om u zo goed mogelijk van dienst te kunnen zijn vragen wij u dit
              formulier zo goed mogelijk in te vullen.
            </h6>
          </div>
          <div className="difference__iframe">
            <iframe
              id="advanced_iframe"
              name="advanced_iframe"
              src="//gietvloeren-offerte.nl/quotation-generator/index.php?thank-you=//www.gietvloeren-utrecht.nl/bedankt-offerte/"
              width="100%"
              height="1550"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
