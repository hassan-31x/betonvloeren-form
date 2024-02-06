
import Link from "next/link";
import React from "react";
import { useModal } from "../../hooks/ModalContext";

export default function InfoBar({keyword,buttonColor,buttonText}) {
  const { openModal } = useModal();
  return (
    <section className="infobar">
      <div className="auto__container">
        <div className="infobar__inner">
          <div className="infobar__items">
            <div className="infobar__item">
              <img src="images/icons/tick.png" alt="" />
              <h5>7000+ {keyword} gestort</h5>
            </div>
            <div className="infobar__item">
              <img src="images/icons/tick.png" alt="" />
              <h5>Beste prijs/kwaliteit {keyword}</h5>
            </div>
          </div>
          <div className="sponsor">
            <div className="sponsor__item">
              <img src="images/sponsors/lenova.png" alt="" />
            </div>
            <div className="sponsor__item">
              <img src="images/sponsors/ikea.png" alt="" />
            </div>
            <div className="sponsor__item">
              <img src="images/sponsors/geemente.png" alt="" />
            </div>
            <div className="sponsor__item">
              <img src="images/sponsors/dell.png" alt="" />
            </div>
            <div className="sponsor__item">
              <img src="images/sponsors/lg.png" alt="" />
            </div>
          </div>
          <div className="infobar__row">
            <div className="infobar__row-item">
              <div className="infobar__row-item-title">email ons</div>
              <img src="images/icons/mail.png" alt="" />
            </div>
            <button onClick={openModal}  className={`button primary bg-${buttonColor}`}>
              {buttonText}
            </button>
            <div className="infobar__row-item">
              <div className="infobar__row-item-title">bel ons</div>
              <img src="images/icons/phone-call-blue.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
