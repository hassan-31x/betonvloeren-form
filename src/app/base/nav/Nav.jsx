"use client";
import React from "react";
import NavDropdown from "./NavDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ menu, close,variations }) {
  const pathname = usePathname();
  return (
    <nav className={"nav " + (menu ? "active" : "")} id="menu" onClick={close}>
      <div className="nav__inner">
        <NavDropdown variations={variations} title={"Betonvloeren"} />
        <NavDropdown variations={variations} title={"Betonvloeren afwerking"} />
        <a href="#" className="nav__inner-link">
          Betonvloeren prijs
        </a>
        <Link
          href="photo"
          className={
            "nav__inner-link " + (pathname === "/photo" ? "active" : "")
          }
        >
          Foto’s
        </Link>
        <Link
          href="contact"
          className={
            "nav__inner-link " + (pathname === "/contact" ? "active" : "")
          }
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
