"use client";
import { phoneSvg } from "./../../../../../base/SVG";
import { useModal } from "../../../../../hooks/ModalContext";

export default function ButtonRow({
  type,
  phone,
  buttonText,
  buttonColor,
  link,
}) {
  const { openModal } = useModal();
  return (
    <>
      {type === "type1" && (
        <div className="button__row">
          <a href={`tel:${phone}`} className="button secondary phone blue">
            {phoneSvg}
            {phone}
          </a>
          <button
            onClick={openModal}
            type="button"
            className={`button primary bg-[#${buttonColor}] big`}
          >
            {buttonText}
          </button>
        </div>
      )}
      {type === "type2" && (
        <div className="button__row">
          <a href={link} className="button link">
            Meer over Beton cire
          </a>
          <button
            onClick={openModal}
            type="button"
            className={`button primary bg-[#${buttonColor}]`}
          >
            {buttonText}
          </button>
        </div>
      )}
    </>
  );
}
