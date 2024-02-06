import React from "react";
import { mailSvg, phoneSvg } from "../base/SVG";
import ButtonRow from "../(index)/components/wrapper/Content/components/ButtonRow";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { urlFor } from "../utils/UrlImage";
const serializers = {
  types: {
    block: (props) => <p className="uniq">{props.children}</p>,
    span: (props) => <p className="uniq">{props.children}</p>,
    link: (props) => <Link href={props.mark.href}>{props.children}</Link>,
  },
};
export default function ContentVariant({
  CompanyName,
  CompanyTagline,
  phone,
  email,
  CompanyDescription,
  contentBlockHeading,
  contentBlockDescription1,
  contentBlockDescription2,
  contentBlockImage,
  buttonText,
  buttonColor,
}) {
  return (
    <div className="content">
      <div className="content__contact">
        <div className="content__contact-room">
          <h3 className="uniq">{contentBlockHeading}</h3>
          <BlockContent
            className="uniq"
            blocks={contentBlockDescription1}
            serializers={serializers}
          />
          <div className="content__contact-room-image">
            <img src={urlFor(contentBlockImage).url()} alt="" />
          </div>
          <BlockContent
            className="uniq"
            blocks={contentBlockDescription2}
            serializers={serializers}
          />
        </div>
        <ButtonRow
          type={"type1"}
          phone={phone}
          buttonText={buttonText}
          buttonColor={buttonColor}
        />
        <div className="content__contact-hours">
          <h3 className="uniq">Onze openingstijden</h3>
          <p className="uniq">
            <a href="#">Maandag t/m zaterdag van 09:00 uur tot 18:00 uur.</a>
          </p>
        </div>
        <div className="content__contact-tel">
          <h3 className="uniq">Telefonisch contact</h3>
          <p className="uniq">
            U kunt ons bereiken voor advies op maat. Telefonisch zijn wij van
            maandag t/m zaterdag bereikbaar van 09:00 uur tot 18:00 uur.
          </p>
        </div>
        <div className="content__contact-call">
          <h3 className="uniq">Video call</h3>
          <p className="uniq">
            Wilt u liever een gesprek via de computer met bijvoorbeeld Zoom of
            Google meet? Dat kan natuurlijk ook, vraag naar de mogelijkheden.
          </p>
        </div>
        <div className="content__contact-btn">
          <button className="button primary">Plan hier uw video call in</button>
        </div>
      </div>
    </div>
  );
}
