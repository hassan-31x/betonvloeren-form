import React from "react";
import Info from "./components/Info";
import ButtonRow from "./components/ButtonRow";
import Type from "./components/Type";
import Detail from "./components/Detail";
import Adv from "./components/Adv";
import Choose from "./components/Choose";
import BlockContent from '@sanity/block-content-to-react'
import Link from "next/link";

export default function Content({introText, buttons}) {
  const serializers = {
    types: {
      block: (props) => <p className="uniq">{props.children}</p>,
      span: (props) => <p className="uniq">{props.children}</p>,
      link: (props) => <Link href={props.mark.href}>{props.children}</Link>,
    },
  };
  return (
    <div className="wrap__content">
      <div className="wrap__content-text">
        <BlockContent className="uniq" blocks={introText} serializers={serializers} />
        
      </div>
      <Info infoList={buttons} />
    </div>
  );
}
