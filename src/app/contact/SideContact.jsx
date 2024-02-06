import React, { useEffect } from "react";
import { phoneSvg } from "../base/SVG";
import Link from "next/link";
import Colors from "./Colors";
import { urlFor } from "../utils/UrlImage";

export default function SideContact({ setColorData, setColorModal, buttonColor,buttonText,phone,sideImage }) {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
  const onScroll = () => {
    if (document.getElementById("wrapper2")) {
      if (
        window.scrollY >=
        document.getElementById("wrapper2").offsetTop -
          document.getElementById("header").offsetHeight
      ) {
        document.getElementById("side2").classList.add("sticky");
      } else {
        document.getElementById("side2").classList.remove("sticky");
      }
    }
  };
  return (
    <div className="side cont" id="side2">
      <div className="side__box">
        <div className="side__box-image">
          <Link href="/photo" className="side__box-image-text">
            <strong>Betonvloer foto’s</strong>
            Het gehele portfolio
          </Link>
          <img src={urlFor(sideImage).url()} alt="" />
        </div>
        {/* <button type="button" className="button secondary">
          Download onze brochure
        </button> */}
        <button
          type="button"
          className={`button primary bg-[#${buttonColor}] big`}
        >
          {buttonText}
        </button>
        <a href={`tel:${phone}`} className="button secondary phone">
          {phoneSvg}
          {phone}
        </a>
      </div>
      <div className="side__note">
        * Bereikbaar op werkdagen van 09:00 tot 18:00 <br />
        voor een geheel vrijblijvend orienterend gesprek.
      </div>
      <Colors setColorData={setColorData} setColorModal={setColorModal} />
    </div>
  );
}
