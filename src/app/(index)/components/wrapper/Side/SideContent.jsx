import React, { useEffect, useState } from "react";
import { phoneSvg } from "../../../../base/SVG";
import Colors from "./components/Colors";
import Link from "next/link";
import { urlFor } from "../../../../utils/UrlImage";
import { useModal } from "../../../../hooks/ModalContext";

export default function SideContent({
  setColorData,
  setColorModal,
  sideImage,
  phone,
  buttonColor,
  buttonText,
}) {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
  const onScroll = () => {
    if (document.getElementById("wrapper")) {
      if (
        window.scrollY >=
        document.getElementById("wrapper").offsetTop -
          document.getElementById("header").offsetHeight
      ) {
        document.getElementById("side").classList.add("sticky");
      } else {
        document.getElementById("side").classList.remove("sticky");
      }
    }
  };
  
  const { openModal } = useModal();

  return (
    <>
      <div className="side" id="side">
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
            onClick={openModal}
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
    </>
  );
}
