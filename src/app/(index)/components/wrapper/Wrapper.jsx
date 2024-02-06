"use client";
import Side from "./Side/Side";
import Content from "./Content/Content";
import Content2 from "./Content/Content2";
import SideContent from "./Side/SideContent";

export default function Wrapper({
  setColorData,
  setColorModal,
  introText,
  buttonColor,
  buttonText,
  phone,
  buttons,
  boxText,
  sideImage,
  categoryHeading,
  categoryIntro,
  shortVariantsIntro,
  variantsIntroHeading,
  domain,
  advantagesBlocks,
  advantagesHeading,
  advantagesIntroText,
  variations,
  keyword,
  mainHeading
}) {

  const hardcodedObjects = [
    { title: mainHeading, slug: "mainHeading" },
    { title: categoryHeading, slug: "categoryHeading" }
  ];


  // Extract titles and slugs from variants
  const variantObjects = variations.map(variant => ({
    title: variant.mainHeading,
    slug: variant.slug.current 
  }));

  // Combine hardcoded objects and variant objects
  let combinedList = [...hardcodedObjects, ...variantObjects];

  // Add advantagesHeading object as the last item
  const advantagesObject = { title: advantagesHeading, slug: "advantagesHeading" };
  combinedList.push(advantagesObject);

  return (
    <>
      <section className="wrap">
        <div className="auto__container">
          <div className="wrap__inner">
            <Content introText={introText} buttons={buttons} />
            <Side faqList ={combinedList}/>
          </div>
        </div>
      </section>
      <section className="wrapper" id="wrapper">
        <div className="wrapper__element">
          <img src="images/wrapperElement.png" alt="" />
        </div>
        <div className="auto__container">
          <div className="wrapper__inner">
            <Content2
              buttonColor={buttonColor}
              buttonText={buttonText}
              phone={phone}
              boxText={boxText}
              categoryHeading={categoryHeading}
              categoryIntro={categoryIntro}
              variantsIntroHeading={variantsIntroHeading}
              shortVariantsIntro={shortVariantsIntro}
              domain={domain}
              advantagesBlocks={advantagesBlocks}
              advantagesHeading={advantagesHeading} 
              advantagesIntroText={advantagesIntroText}
              variations={variations}
              keyword={keyword}
            />
            <SideContent
              setColorData={setColorData}
              setColorModal={setColorModal}
              sideImage={sideImage}
              buttonColor={buttonColor}
              buttonText={buttonText}
              phone={phone}
            />
          </div>
        </div>
      </section>
    </>
  );
}
