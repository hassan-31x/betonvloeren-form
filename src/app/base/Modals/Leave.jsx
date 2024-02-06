import React from "react";
import Modal from "./Modal";
import { cancel, phoneSvg } from "../SVG";

export default function Leave({ setLeave }) {
  return (
    <Modal addClass="drk" setModal={setLeave}>
      <div className="modalLeave">
        <div className="modalLeave__inner">
          <div className="modalLeave__image">
            <img src="images/leave.jpg" alt="" />
          </div>
          <div className="modalLeave__content">
            <h2 className="large">Voordat u gaat</h2>
            <div className="modalLeave__content-items">
              <div className="modalLeave__content-item">
                <img src="images/icons/tickCircle.png" alt="" />
                <h4>7000+ tevreden klanten</h4>
              </div>
              <div className="modalLeave__content-item">
                <img src="images/icons/tickCircle.png" alt="" />
                <h4>Beste prijs/kwaliteit</h4>
              </div>
              <div className="modalLeave__content-item">
                <img src="images/icons/tickCircle.png" alt="" />
                <h4>Vrijblijvende consultatie</h4>
              </div>
            </div>
            <div className="modalLeave__content-btns">
              <a href="tel:020 - 370 91 51" className="button secondary phone">
                {phoneSvg}
                020 - 370 91 51*
              </a>
              <button type="button" className="button primary big">
                Offerte aanvragen
              </button>
            </div>
          </div>
          <div className="modalLeave__text">
            <img src="images/leaveText.png" alt="" />
          </div>
        </div>
      </div>
    </Modal>
  );
}
