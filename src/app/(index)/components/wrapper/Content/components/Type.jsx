import React from "react";
import ButtonRow from "./ButtonRow";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { urlFor } from "../../../../../utils/UrlImage";



export default function Type({
  categoryHeading,
  categoryIntro,
  shortVariantsIntro,
  variantsIntroHeading,
  variations
}) {
  const typeList = variations.map(type => ({
    id: type.slug.current,
    title: type.mainHeading,
    image: type.homePageSmallImage
  }))
  
  const serializers = {
    types: {
      block: (props) => <p className="extra">{props.children}</p>,
      span: (props) => <p className="extra">{props.children}</p>,
      link: (props) => <Link href={props.mark.href}>{props.children}</Link>,
    },
  };
  return (
    <div className="content__type">
      <h2 className="categoryHeading">{categoryHeading}</h2>
      <p className="extra">
        <BlockContent
          className=""
          blocks={categoryIntro}
          serializers={serializers}
        />
      </p>
      <div className="content__type-items">
        {typeList.map((item, index) => {
          return <TypeItem itemData={item} key={index} />;
        })}
      </div>
      <h3 className="sm">{variantsIntroHeading}</h3>
      <p className="extra">
        <BlockContent
          className=""
          blocks={shortVariantsIntro}
          serializers={serializers}
        />
      </p>
      <ButtonRow />
    </div>
  );
}

const TypeItem = ({ itemData }) => {
  return (
    <div className="content__type-item">
      <div className="content__type-item-image">
        <img src={urlFor(itemData.image).url()} alt="" />
        <a href={`/${itemData.id}`}>
          <h6>{itemData.title}</h6>
        </a>
      </div>
    </div>
  );
};
