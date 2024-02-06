"use client";
import Footer from "../base/Footer";
import Header from "../base/Header";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContactIntro from "./ContactIntro";
import ContactWrapper from "./ContactWrapper";
import ColorModal from "../base/Modals/ColorModal";

export default function ContactMain({ homeData, uiData, contactData,variations }) {
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
        type="second"
        link={"Contact"}
        logo_={homeData.logo}
        keyword={uiData.keyword}
        email={uiData.email}
        buttonColor={uiData.buttonColor}
        buttonText={uiData.buttonText}
        phone={uiData.contactNumber}
        variations={variations}
      />
      <main>
        <div className="contact">
          <ContactIntro
            mainHeading={contactData.mainHeading}
            backgroundImage={contactData.backgroundImage}
          />
          <ContactWrapper
            setColorData={setColorData}
            setColorModal={setColorModal}
            email={uiData.email}
            phone={uiData.contactNumber}
            buttonText={uiData.buttonText}
            buttonColor={uiData.buttonColor}
            CompanyName={contactData.CompanyName}
            CompanyTagline={contactData.CompanyTagline}
            CompanyDescription={contactData.CompanyDescription}
            contentBlockHeading={contactData.contentBlock.contentBlockHeading}
            contentBlockImage={contactData.contentBlock.contentBlockImage}
            contentBlockDescription1={contactData.contentBlock.contentBlockDescription1}
            contentBlockDescription2={contactData.contentBlock.contentBlockDescription2}
            sideImage={homeData.sideImage}
          />
        </div>
      </main>
      <Footer
        domain={homeData.domainName}
        logo_={homeData.logo}
        keyword={uiData.keyword}
        email={uiData.email}
        buttonColor={uiData.buttonColor}
        buttonText={uiData.buttonText}
        phone={uiData.contactNumber}
        variations={variations}
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
