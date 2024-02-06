import React from "react";
import { urlFor } from "../../../../../utils/UrlImage";



export default function Info({infoList}) {
  return (
    <div className="wrap__content-info">
      {infoList.map((item, index) => {
        return <InfoItem itemData={item} key={index} />;
      })}
    </div>
  );
}
const InfoItem = ({ itemData }) => {
  return (
    <div className="wrap__content-info-item">
      <div className="wrap__content-info-item-image">
        <img src={urlFor(itemData.image).url()} alt="" />
        <a href={`/${itemData.slug}`}>
          <h4>
            Alles over <span>{itemData.title}</span>
          </h4>
        </a>
      </div>
      {itemData.tag && (
        <div className="wrap__content-info-item-tag">{itemData.tag}</div>
      )}
    </div>
  );
};
