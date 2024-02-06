import React from "react";
import ContentContact from "./ContentContact";
import SideContact from "./SideContact";

export default function ContactWrapper({
  email,
  phone,
  setColorData,
  setColorModal,
  CompanyName,
  CompanyDescription,
  contentBlockDescription1,
  contentBlockDescription2,
  contentBlockHeading,
  contentBlockImage,
  CompanyTagline,
  buttonText,
  sideImage,
  buttonColor,
}) {
  return (
    <section className="wrapper" id="wrapper2">
      <div className="auto__container">
        <div className="wrapper__inner">
          <ContentContact
            buttonText={buttonText}
            buttonColor={buttonColor}
            email={email}
            phone={phone}
            CompanyName={CompanyName}
            CompanyTagline={CompanyTagline}
            CompanyDescription={CompanyDescription}
            contentBlockHeading={contentBlockHeading}
            contentBlockImage={contentBlockImage}
            contentBlockDescription1={contentBlockDescription1}
            contentBlockDescription2={contentBlockDescription2}
          />
          <SideContact
            setColorData={setColorData}
            setColorModal={setColorModal}
            buttonText={buttonText}
            buttonColor={buttonColor}
            phone={phone}
            sideImage={sideImage}
          />
        </div>
      </div>
    </section>
  );
}
