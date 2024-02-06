"use client";
import Footer from "../base/Footer";
import Header from "../base/Header";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContactIntro from "./ContactIntro";
import ContactWrapper from "./VariantsWrapper";
import ColorModal from "../base/Modals/ColorModal";
import VariantsWrapper from "./VariantsWrapper";

export default function VariationMain({ homeData, uiData,variation,variations}) {
  const [colorModal, setColorModal] = useState(false);
  const [colorData, setColorData] = useState(null);
  useEffect(() => {
    if (colorModal) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [colorModal]);

  return (
    <>
      <Header
        variations={variations}
        type="second"
        link={variation.mainHeading}
        logo_={homeData.logo}
        keyword={uiData.keyword}
        email={uiData.email}
        buttonColor={uiData.buttonColor}
        buttonText={uiData.buttonText}
        phone={uiData.contactNumber}
      />
      <main>
        <div className="contact">
          <ContactIntro
            mainHeading={variation.mainHeading}
            backgroundImage={variation.innerPageBackgroundImage}
          />
          <VariantsWrapper
            setColorData={setColorData}
            setColorModal={setColorModal}
            email={uiData.email}
            phone={uiData.contactNumber}
            buttonText={uiData.buttonText}
            buttonColor={uiData.buttonColor}
            contentBlockHeading={variation.innerPageSubHeading1}
            contentBlockImage={variation.innerPageImage1}
            contentBlockDescription1={variation.innerPageDescription1}
            contentBlockDescription2={variation.innerPageDescription2}
            sideImage={homeData.sideImage}
          />
        </div>
      </main>
      <Footer
       variations={variations}
        domain={homeData.domainName}
        logo_={homeData.logo}
        keyword={uiData.keyword}
        email={uiData.email}
        buttonColor={uiData.buttonColor}
        buttonText={uiData.buttonText}
        phone={uiData.contactNumber}
      />
      <AnimatePresence>
        {colorModal && (
          <ColorModal
            colorData={colorData}
            setColorData={setColorData}
            setColorModal={setColorModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}
