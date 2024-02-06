"use client";
import React from "react";
import { ColorsList } from "./ColorsModul";

export default function Colors({ setColorData, setColorModal }) {
  return (
    <div className="side__colors">
      <div className="side__colors-title">
        <h3 className="sm">
          Betonvloer designer <span>TM</span>
        </h3>
        <h6>Ontwerp uw eigen betonvloer</h6>
      </div>
      <div className="side__colors-items">
        {ColorsList.map((item, index) => {
          return (
            <ColorItem
              itemData={item}
              key={index}
              onClick={() => {
                setColorData(item);
                setColorModal(true);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
const ColorItem = ({ itemData, onClick }) => {
  return (
    <div className="side__colors-item" onClick={onClick}>
      <div className="side__colors-item-image">
        <img src={itemData.image} alt="" />
      </div>
    </div>
  );
};
