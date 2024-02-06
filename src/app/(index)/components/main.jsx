"use client";
import { AnimatePresence } from "framer-motion";
import Footer from "../../base/Footer";
import Header from "../../base/Header";
import InfoBar from ".././components/InfoBar";
import Interested from ".././components/Interested";
import Intro from ".././components/Intro";
import Review from ".././components/Review";
import Wrapper from ".././components/wrapper/Wrapper";
import { useEffect, useState } from "react";
import Cookie from "../../base/Modals/Cookie";
import Leave from "../../base/Modals/Leave";
import ColorModal from "../../base/Modals/ColorModal";
import Difference from ".././components/Difference";
import { getColors } from "../../api/api";
import home from "../../../../sanity/lib/home";

export default function Main({homeData, uiData,variations}) {
  const [cookie, setCookie] = useState(false);
  const [leave, setLeave] = useState(false);
  const [colorModal, setColorModal] = useState(false);
  const [colorData, setColorData] = useState(null);
  const [colorModul, setColorModul] = useState([]);
  useEffect(() => {
    if (cookie || colorModal || leave) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [cookie, leave, colorModal]);
  const getApi = async () => {
    const data = await getColors();
    setColorModul(data.edges);
  };
  useEffect(() => {
    getApi();
  }, []);

  console.log(colorModul);
  return (
    <>
      <Header variations={variations} logo_={homeData.logo} keyword={uiData.keyword} email={uiData.email}  buttonColor={uiData.buttonColor} buttonText={uiData.buttonText}  phone={uiData.contactNumber} />
      <main>
        <Intro setColorData={setColorData} setColorModal={setColorModal} buttonColor={uiData.buttonColor} buttonText={uiData.buttonText}  mainHeading={homeData.mainHeading} bgImage={homeData.bgImage} keyword={uiData.keyword} />
        <InfoBar buttonColor={uiData.buttonColor} buttonText={uiData.buttonText} keyword={uiData.keyword} />
        <Wrapper setColorData={setColorData} setColorModal={setColorModal} introText={homeData.introText} buttonColor={uiData.buttonColor} buttonText={uiData.buttonText}  phone={uiData.contactNumber} buttons={homeData.buttons} boxText={homeData.boxText} sideImage={homeData.sideImage}  categoryHeading={homeData.categoryHeading}
        categoryIntro={homeData.categoryIntro}
        variantsIntroHeading={homeData.variantsIntroHeading}
        shortVariantsIntro={homeData.shortVariationsIntro}
        domain={homeData.domainName}
        advantagesBlocks={homeData.advantagesBlocks}
        advantagesHeading={homeData.advantageHeading}
        advantagesIntroText={homeData.advantageIntro}
        variations = {variations}
        keyword={uiData.keyword}
        mainHeading={homeData.mainHeading}
        />
        <Interested domain={homeData.domainName} />
        <Review />
        <Difference />
      </main>
      <Footer variations={variations} domain={homeData.domainName}  logo_={homeData.logo} keyword={uiData.keyword} email={uiData.email}  buttonColor={uiData.buttonColor} buttonText={uiData.buttonText}  phone={uiData.contactNumber} />
      <AnimatePresence>
        {cookie && <Cookie setCookie={setCookie} />}
      </AnimatePresence>
      <AnimatePresence>
        {leave && <Leave setLeave={setLeave} />}
      </AnimatePresence>
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
