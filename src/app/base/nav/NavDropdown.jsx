import React, { useEffect, useRef, useState } from "react";
import { urlFor } from "../../utils/UrlImage";
import { caretDown, chevronRight } from "../SVG";



export default function NavDropdown({ variations, title }) {
  const NavList = variations.map(variant => ({
    id: variant.slug.current,
    image: variant.navbarImage,
    title: variant.navbarTitle,
    desc: variant.navbarText,
    tag: variant.tag, // Assuming tag exists in some variants
    topSell: variant.topSell // Assuming topSell exists in some variants
  }));
  
  const wrapper = useRef(null);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) setDropdown(false);
    };

    if (dropdown) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [dropdown]);
  return (
    <div
      className={"nav__inner-dropdown " + (dropdown ? "active" : "")}
      ref={wrapper}
    >
      <div
        className="nav__inner-dropdown-title"
        onClick={() => setDropdown(!dropdown)}
      >
        {title}
        {caretDown}
      </div>
      <div className="nav__inner-dropdown-content">
        {NavList.map((item, index) => {
          return <DropdownItem itemData={item} key={index} />;
        })}
      </div>
    </div>
  );
}
const DropdownItem = ({ itemData }) => {
  return (
    <a
      href={itemData.id}
      className={
        "nav__inner-dropdown-item " + (itemData.topSell ? "topSell" : "")
      }
    >
      <div className="nav__inner-dropdown-item-image">
        <img src={urlFor(itemData.image).url()} alt="" />
      </div>
      <div className="nav__inner-dropdown-item-content">
        <div className="nav__inner-dropdown-item-content-title">
          <h4>{itemData.title}</h4>
          {itemData.tag && (
            <div className="nav__inner-dropdown-item-content-tag">
              {itemData.tag}
            </div>
          )}
        </div>
        <p>{itemData.desc}</p>
      </div>
      {chevronRight}
    </a>
  );
};
