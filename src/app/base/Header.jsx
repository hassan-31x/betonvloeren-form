"use client";
import { useEffect, useState } from "react";
import { mailSvg, phoneSvg } from "./SVG";
import Nav from "./nav/Nav";
import Link from "next/link";
import { urlFor } from "../utils/UrlImage";
import { useModal } from "../hooks/ModalContext";

export default function Header({
  type,
  btn,
  link,
  logo_,
  keyword,
  email,
  buttonColor,
  buttonText,
  variations,
  phone,
}) {
  const [menu, setMenu] = useState(false);
  const [logo, setLogo] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);  
  
  const { openModal } = useModal()

  useEffect(() => {
    setScrollWidth(
      (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight)
    );
    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
  const start = 250;
  const onScroll = () => {
    if (window.scrollY > start) {
      document.getElementById("header").classList.add("sticky");
      setLogo(true);
    } else {
      document.getElementById("header").classList.remove("sticky");
      setLogo(false);
    }
    setScrollWidth(
      (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight)
    );
  };
  useEffect(() => {
    if (menu) {
      if (!document.getElementById("header").classList.contains("sticky")) {
        document.getElementById("header").classList.add("active");
      }
      document.body.classList.add("active");
    } else {
      document.getElementById("header").classList.remove("active");
      document.body.classList.remove("active");
    }
  }, [menu]);
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  return (
    <>
      <header className={`header ` + (type ? "second " : "")} id="header">
        <div className="headerTop">
          <div className="auto__container">
            <div className="headerTop__inner">
              <div className="promo">
                <div className="promo__text">
                  Best beoordeelde {keyword} specialist met{" "}
                  <a href="#">200+ reviews</a>!
                </div>
                <img src="images/stars.png" alt="" />
              </div>
              <div className="headerTop__links">
                <a href={`mailto:${email}`} className="headerTop__link">
                  {mailSvg}
                  {email}
                </a>
                <a href={`tel:${phone}`} className="headerTop__link phone">
                  {phoneSvg}
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="headerBot">
          <div className="auto__container">
            <div className="headerBot__inner">
              <div
                className="headerBot__scroll"
                style={{ width: `${scrollWidth}%` }}
              ></div>
              <Link href="/" className="headerBot__inner-logo">
                {type === "second" ? (
                  <img src={urlFor(logo_).url()} alt="" />
                ) : (
                  <>
                    {menu ? (
                      <img src={urlFor(logo_).url()} alt="" />
                    ) : (
                      <>
                        {logo ? (
                          <img src={urlFor(logo_).url()} alt="" />
                        ) : (
                          <img src={urlFor(logo_).url()} alt="" />
                        )}
                      </>
                    )}
                  </>
                )}
              </Link>
              <Nav variations={variations} menu={menu} close={close} />
              <div
                className={"burger " + (menu ? "active" : "")}
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <span></span>
              </div>
              {btn === "phone" ? (
                <a href="tel:020 - 370 91 51" className="headerBot__inner-btn">
                  <img src="images/icons/phone-call.png" alt="" />
                  {phone}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={openModal}
                  className={`button primary bg-[#${buttonColor}]`}
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="header__breadcrumbs">
          <div className="auto__container">
            <div className="header__breadcrumbs-inner">
              <div
                className="header__breadcrumbs-inner-scroll"
                style={{ width: `${scrollWidth}%` }}
              ></div>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span>&gt; &gt;</span>
                </li>
                <li>{link}</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
