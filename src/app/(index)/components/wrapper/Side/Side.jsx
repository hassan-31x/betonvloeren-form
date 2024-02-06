import React from "react";
import Faq from "./components/Faq";

export default function Side({faqList}) {
  return (
    <div className="wrap__side">
      <Faq faqList={faqList}/>
    </div>
  );
}
