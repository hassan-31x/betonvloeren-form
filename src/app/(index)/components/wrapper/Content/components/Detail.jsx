import React from "react";
import { urlFor } from "../../../../../utils/UrlImage";
import ButtonRow from "./ButtonRow";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

export default function Detail({buttonText, buttonColor,variations}) {
  const DetailList = variations.map(section => ({
    id: section.slug.current,
    title: section.mainHeading,
    tag: section.tag,
    desc1: section.homePageDescription1,
    imageBig: section.homePageImage,
    subtitle: section.subHeading1,
    desc2: section.homePageDescription2,
    images: section.homePageImages,
    desc3: section.homePageDescription3,
    subHeading2 : section.subHeading2,
    adv: section.features,
    desc4: section.homePageDescription4,
  }));

  return (
    <div className="detail__outer">
      {DetailList.map((item, index, ) => {
        return <DetailItem itemData={item} key={index} index={index} buttonText={buttonText} buttonColor={buttonColor}   />;
      })}
    </div>
  );
}
const DetailItem = ({ itemData, index, buttonColor,buttonText }) => {
  const serializersDesc1 = {
    types: {
      block: (props) => <p className="extra">{props.children}</p>,
      span: (props) => <p className="extra">{props.children}</p>,
      link: (props) => <Link href={props.mark.href}>{props.children}</Link>,
    },
  };

  return (
    <div id={itemData.id} className="detail">
      <div className="detail__title">
        <h3>
          {index + 1}. {itemData.title}
        </h3>
        {itemData.tag && (
          <div className="detail__title-tag">{itemData.tag}</div>
        )}
      </div>
      {itemData.desc1 && <p className="extra"><BlockContent
            className=""
            blocks={itemData.desc1}
            serializers={serializersDesc1}
          /></p>}

      <div className="detail__image">
        <img src={urlFor(itemData.imageBig).url()} alt="" />
      </div>
      {itemData.subtitle && <h3 className="sm">{itemData.subtitle}</h3>}
      {itemData.desc2 && <p className="extra"> <BlockContent
            className=""
            blocks={itemData.desc2}
            serializers={serializersDesc1}
          /></p>}

      {itemData?.images?.length > 0 && (
        <div
          className={
            "detail__items " + (itemData.images.length > 2 ? "three" : "")
          }
        >
          {itemData.images.map((item, index) => {
            return (
              <div className="detail__item" key={index}>
                <div className="detail__item-image">
                  <img src={urlFor(item).url()} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      )}
      {itemData.desc3 && <p className="extra"><BlockContent
            className=""
            blocks={itemData.desc3}
            serializers={serializersDesc1}
          /></p>}
      {itemData?.adv?.length > 0 && (
        <>
          <h3 className="sm">{itemData.subHeading2}</h3>
          <div className="detail__adv">
            {itemData?.adv.map((item, index) => {
              return (
                <div className="detail__adv-item" key={index}>
                  <img src="images/icons/tick.png" alt="" />
                  {item}
                </div>
              );
            })}
          </div>
        </>
      )}
      {itemData.desc4 && <p className="extra"><BlockContent
            className=""
            blocks={itemData.desc4}
            serializers={serializersDesc1}
          /></p>}
      <ButtonRow
        type={"type2"}
        buttonText={buttonText}
        buttonColor={buttonColor}
        link={`/${itemData.id}`}
      />
    </div>
  );
};
