import React from "react";
import ContentVariant from "./ContentVariant";
import SideContact from "./SideContact";

export default function VariantsWrapper({
  email,
  phone,
  setColorData,
  setColorModal,
  contentBlockDescription1,
  contentBlockDescription2,
  contentBlockHeading,
  contentBlockImage,
  buttonText,
  sideImage,
  buttonColor,
}) {
  return (
    <section className="wrapper" id="wrapper2">
      <div className="auto__container">
        <div className="wrapper__inner">
          <ContentVariant
            buttonText={buttonText}
            buttonColor={buttonColor}
            email={email}
            phone={phone}
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
