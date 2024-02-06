"use client"

import React, { useState } from "react";
import Link from "next/link";
import { urlFor } from "../utils/UrlImage";
import {
  faceBookIcon,
  instagramIcon,
  mailSvg,
  phoneSvg,
  tiktokIcon,
  twitterIcon,
} from "./SVG";
import { useModal } from "../hooks/ModalContext";

export default function Footer({
  type,
  btn,
  link,
  logo_,
  keyword,
  email,
  buttonColor,
  buttonText,
  phone,
  domain,
  variations,
}) {
  const FooterLinks = variations.map((variant) => ({
    id: variant.slug.current,
    title: variant.mainHeading,
  }));
  const { openModal } = useModal()
  return (
    <>
    <div className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footerTop">
            <div className="footerTop__inner">
              <div className="footerTop__left">
                <Link href={"/"} className="footerTop__left-logo">
                  <img src={urlFor(logo_).url()} alt="" />
                </Link>
                <h5 className="sm">{domain}</h5>
                <div className="footerTop__left-links">
                  <a
                    href="mailto:info@betonvloeren.nl"
                    className="footerTop__left-link"
                  >
                    {mailSvg} {email}
                  </a>
                  <a href={`tel:${phone}`} className="footerTop__left-link">
                    {phoneSvg} {phone}
                  </a>
                </div>
                <a href={`/contact`} className="footerTop__right-col-link">
                  Contact
                </a>
                <h6>Op afspraak te bezoeken!</h6>
                <button
                onClick={openModal}
                  type="button"
                  className={`button primary bg-[#${buttonColor}]`}
                >
                  {buttonText}
                </button>
              </div>
              <div className="footerTop__right">
                <div className="footerTop__right-col">
                  <h5 className="sm">Betonvloeren</h5>
                  <div className="footerTop__right-col-links">
                    {FooterLinks.map((link, index) => {
                      return (
                        <Link
                        key={index}
                          href={`/${link.id}`}
                          className="footerTop__right-col-link"
                        >
                          {link.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="footerTop__right-col">
                  <h5 className="sm">Betonvloeren afwerking</h5>
                  <div className="footerTop__right-col-links">
                    {FooterLinks.map((link, index) => {
                      return (
                        <Link
                        key={index}
                          href={`/${link.id}`}
                          className="footerTop__right-col-link"
                        >
                          {link.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="footerTop__right-col">
                  <h5 className="sm">Betonvloeren prijs</h5>
                  <div className="footerTop__right-col-links">
                    {FooterLinks.map((link, index) => {
                      return (
                        <Link
                        key={index}
                          href={`/${link.id}`}
                          className="footerTop__right-col-link"
                        >
                          {link.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="footerTop__right-col">
                  <Link href="/photo">
                    {" "}
                    <h5 className="sm">Portfolio</h5>
                  </Link>
                  <div className="footerTop__right-col-images">
                    <div className="footerTop__right-col-image">
                      <img src="images/noa.png" alt="" />
                    </div>
                    <div className="footerTop__right-col-image">
                      <img src="images/tba.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="promo">
              <div className="promo__text">
                Best beoordeelde {keyword} specialist met{" "}
                <a href="#">200+ reviews</a>!
              </div>
              <img src="images/stars.png" alt="" />
            </div>
          </div>
          <div className="footerBot">
            <div className="footerBot__inner">
              <div className="footerBot__info">
                <Link href={"/"} className="footerBot__logo">
                  <img src={urlFor(logo_).url()} alt="" />
                </Link>
                <p>
                  Bekijk onze <a href="#"> privacy statement</a> en{" "}
                  <a href="#">terms & conditions</a>
                </p>
              </div>
              <div className="footerBot__socials">
                <a href="#" className="footerBot__social">
                  {twitterIcon}
                </a>
                <a href="#" className="footerBot__social">
                  {faceBookIcon}
                </a>
                <a href="#" className="footerBot__social">
                  {instagramIcon}
                </a>
                <a href="#" className="footerBot__social">
                  {tiktokIcon}
                </a>
              </div>
            </div>
            <div className="footerBot__links">
              <a href="#" className="footerBot__link">
                Beton cire
              </a>
              <a href="#" className="footerBot__link">
                Gevlinderde betonvloer
              </a>
              <a href="#" className="footerBot__link">
                Gietvloer beton
              </a>
              <a href="#" className="footerBot__link">
                Betonlook vloer
              </a>
              <a href="#" className="footerBot__link">
                Design betonvloer
              </a>
              <a href="#" className="footerBot__link">
                Betonvloer coating
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
