import { caretDown } from "../../../../../base/SVG";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Faq({ faqList }) {
  const [isActive, setIsActive] = useState(null);
  return (
    <div className="faq__outer">
      <h3 className="sm">Inhoudsopgave</h3>
      {faqList.map((item, index) => {
        return (
          <FaqItem
            itemData={item}
            key={index}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      })}
    </div>
  );
}
const FaqItem = ({ itemData, isActive, setIsActive }) => {
  return (
    <div className={"faq " + (isActive?.id === itemData.id ? "active" : "")}>
      <div className="faq__title">
        <ScrollLink
          to={itemData.slug}
          spy={true}
          smooth={true}
          offset={-180}
          duration={500}
          activeClass="text-white"
          className="text-darkGrey overpass text-[0.6rem] md:text-lg cursor-pointer"
        >
          {itemData.title}
        </ScrollLink>
      </div>
    </div>
  );
};
