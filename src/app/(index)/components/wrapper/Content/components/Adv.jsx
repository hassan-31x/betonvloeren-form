import React from "react";
import { urlFor } from "../../../../../utils/UrlImage";
import ButtonRow from "./ButtonRow";



export default function Adv({
  phone,
  buttonColor,
  buttonText,
  advantagesHeading,
  advantagesIntroText,
  advantagesBlocks,
}) {
  return (
    <div className="content__adv">
      <div className="content__adv-title">
        <h2 className="advantagesHeading">{advantagesHeading}</h2>
        <img src="images/icons/tick.png" alt="" />
      </div>
      <p className="extra">{advantagesIntroText}</p>
      {advantagesBlocks.map((advantageBlock) => {
        return (
          <>
            <div className="content__adv-row">
              <AdvItem itemData={{image:advantageBlock.advantage1Image, title:advantageBlock.advantage1Heading, desc : advantageBlock.advantage1Text}} />
              <AdvItem itemData={{image:advantageBlock.advantage2Image, title:advantageBlock.advantage2Heading, desc : advantageBlock.advantage2Text}} />
            </div>
            <ButtonRow
              type={"type1"}
              phone={phone}
              buttonText={buttonText}
              buttonColor={buttonColor}
            />
          </>
        );
      })}
    </div>
  );
}

const AdvItem = ({ itemData }) => {
  return (
    <div className="content__adv-item">
      <div className="content__adv-item-image">
        <img src={urlFor(itemData.image).url()} alt="" />
      </div>
      <h3 className="sm">{itemData.title}</h3>
      <p className="extra">{itemData.desc}</p>
    </div>
  );
};
