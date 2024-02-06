import React from "react";
import Info from "./components/Info";
import ButtonRow from "./components/ButtonRow";
import Type from "./components/Type";
import Detail from "./components/Detail";
import Adv from "./components/Adv";
import Choose from "./components/Choose";
import Faq from "../Side/components/Faq";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

export default function Content2({
  buttonText,
  phone,
  buttonColor,
  boxText,
  categoryHeading,
  categoryIntro,
  shortVariantsIntro,
  variantsIntroHeading,
  domain,
  advantagesBlocks,
  advantagesHeading,
  advantagesIntroText,
  variations,
  keyword
}) {
  const serializers = {
    types: {
      block: (props) => <p className="extrasm">{props.children}</p>,
      span: (props) => <p className="extrasm">{props.children}</p>,
      link: (props) => <Link href={props.mark.href}>{props.children}</Link>,
    },
  };

  return (
    <div className="content">
      <ButtonRow
        type={"type1"}
        phone={phone}
        buttonText={buttonText}
        buttonColor={buttonColor}
      />
      <div className="content__about">
        <h3 className="sm">
          Wat zijn {keyword} en waarom zijn ze populair?
        </h3>
        <div className="content__about-inner">
          <BlockContent
            className=""
            blocks={boxText}
            serializers={serializers}
          />
        </div>
      </div>
      <Type
        categoryHeading={categoryHeading}
        categoryIntro={categoryIntro}
        variantsIntroHeading={variantsIntroHeading}
        shortVariantsIntro={shortVariantsIntro}
        variations={variations}
      />
      <Detail buttonText={buttonText} buttonColor={buttonColor} variations={variations} />
      <Adv phone={phone} buttonText={buttonText} buttonColor={buttonColor} advantagesBlocks={advantagesBlocks} advantagesHeading={advantagesHeading} advantagesIntroText={advantagesIntroText} />
      <Choose domain={domain} />
    </div>
  );
}
