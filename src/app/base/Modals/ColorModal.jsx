import React from "react";
import Modal from "./Modal";
import { cancel } from "../SVG";
import { ColorsList } from "../../(index)/components/wrapper/Side/components/ColorsModul";

export default function ColorModal({ setColorModal, colorData, setColorData }) {
  return (
    <Modal setModal={setColorModal} addClass="drk">
      <div className="modalColor">
        <div className="modalColor__close" onClick={() => setColorModal(false)}>
          {cancel}
        </div>
        <div className="modalColor__inner">
          <div className="modalColor__slider">
            <div className="modalColor__slider-item">
              <div className="modalColor__slider-item-content">
                <div className="modalColor__slider-item-title">
                  {colorData.title}
                </div>
                <div className="modalColor__slider-item-subtitle">
                  Betonvloer designer <span>TM</span>
                </div>
                <p>Ontwerp uw eigen betonvloer</p>
              </div>
              <div className="modalColor__slider-item-image">
                <img src={colorData.mainImage} alt="" />
              </div>
            </div>
          </div>
          <div className="modalColor__nav">
            {ColorsList?.map((item, index) => {
              return (
                <div
                  className={
                    "modalColor__nav-item " +
                    (colorData?.id === item.id ? "active" : "")
                  }
                  key={index}
                  onClick={() => setColorData(item)}
                >
                  <div className="modalColor__nav-item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="modalColor__nav-item-title">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
}
