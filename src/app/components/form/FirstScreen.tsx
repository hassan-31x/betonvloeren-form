import React from "react";
import ErrorTooltip from "./ErrorTooltip";
import Image from "next/image";

interface FirstScreenProps {
  inputs: Inputs;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Inputs;
}

const FirstScreen = ({
  inputs,
  handleInputChange,
  errors,
}: FirstScreenProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="mb-5">
        <h3 className="text-black text-2xl font-extrabold text-center">
          Welkom! Even voorstellen..
        </h3>
        <p className=" font-medium text-lg text-center">
          <span className="text-[#0090ff] font-medium">Als eerst een paar basis gegevens</span>
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-between w-[97%] mr-auto">
          <div className="flex items-center space-x-2">
            <label className="flex text-xs text-gray-600 font-medium gap-[3px] items-center">
              <input
                type="radio"
                name="useCase"
                className="accent-[#0090ff] h-6 w-6 my-2 mb-5"
                value="particulier"
                checked={inputs.useCase === "particulier"}
                onChange={handleInputChange}
              />
              <span className="flex flex-col gap-2 w-full items-center pt-2">
                <Image src="/pic 1.png" height={32} width={32} alt="particulier" />
                Particulier
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex text-xs text-gray-600 font-medium gap-[3px] items-center">
              <input
                type="radio"
                name="useCase"
                className="accent-[#0090ff] h-6 w-6 my-2 mb-5"
                value="zakelijk"
                checked={inputs.useCase === "zakelijk"}
                onChange={handleInputChange}
              />
              <span className="flex flex-col gap-2 w-full items-center pt-2">
                <img src="/pic 2.png" height={32} width={32} alt="zakelijk" />
                Zakelijk
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex text-xs text-gray-600 font-medium gap-[3px] items-center">
              <input
                type="radio"
                name="useCase"
                className="accent-[#0090ff] h-6 w-6 my-2 mb-5"
                value="industrieel"
                checked={inputs.useCase === "industrieel"}
                onChange={handleInputChange}
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <img src="/pic 3.png" height={32} width={32} alt="industrieel" />
                Industrieel
              </span>
            </label>
          </div>
        </div>
        {errors.useCase !== "" && (
          <span className="text-[#fe7e7f] text-sm">{errors?.useCase}</span>
        )}
        <div className="w-full flex flex-col-reverse md:flex-row gap-5 md:gap-4">
          <div className="flex-1">
            <label className="flex flex-col gap-0">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
                Naam{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <ErrorTooltip label={errors?.naam} open={errors?.naam !== ""}>
                <input
                  type="text"
                  name="naam"
                  value={inputs.naam}
                  onChange={handleInputChange}
                  placeholder="Uw naam"
                  className={`w-full focus:border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] ${
                    errors?.naam !== ""
                      ? "border-[#fe7e7f] border-solid border-[2px] "
                      : "border-[#d7edff] border-solid  border-[2px]"
                  } text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]`}
                />
              </ErrorTooltip>
            </label>
          </div>
          <div className="flex-[0.8]">
            <div className="flex items-center pt-5 h-full w-full justify-around">
              <div className="flex items-center space-x-2">
                <label className="flex gap-2 text-sm items-center">
                  <input
                    type="radio"
                    name="gender"
                    className="accent-[#0090ff] h-5 w-5 mb-1"
                    value="dhr"
                    checked={inputs.gender === "dhr"}
                    onChange={handleInputChange}
                  />
                  Dhr.
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <label className="flex gap-2 text-sm items-center">
                  <input
                    type="radio"
                    name="gender"
                    className="accent-[#0090ff] h-5 w-5 mb-1"
                    value="mvr"
                    checked={inputs.gender === "mvr"}
                    onChange={handleInputChange}
                  />
                  Mevr.
                </label>
              </div>
            </div>
            {errors.gender !== "" && (
              <span className="text-[#fe7e7f] text-sm">{errors?.gender}</span>
            )}
          </div>
        </div>
        <div>
          <label className="flex flex-col gap-0">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
              Email{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <ErrorTooltip label={errors?.email} open={errors?.email !== ""}>
              <input
                type="email"
                placeholder="Uw email adres"
                className={`w-full focus:border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] ${
                  errors?.email !== ""
                    ? "border-[#fe7e7f] border-solid border-[2px]"
                    : "border-[#d7edff] border-solid border-[2px]"
                } text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]`}
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
              />
            </ErrorTooltip>
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-0">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
              Mobiel{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <ErrorTooltip label={errors?.mobiel} open={errors?.mobiel !== ""}>
              <input
                type="text"
                placeholder="Uw mobiel nummer"
                className={`w-full focus:border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] ${
                  errors?.mobiel !== ""
                    ? "border-[#fe7e7f] border-solid border-[2px]"
                    : "border-[#d7edff] border-solid border-[2px]"
                } text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]`}
                name="mobiel"
                value={inputs.mobiel}
                onChange={handleInputChange}
              />
            </ErrorTooltip>
          </label>
        </div>
        <div className="flex gap-4">
          <div>
            <label className="flex flex-col gap-0">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
                Postcode{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <ErrorTooltip
                label={errors?.postcode}
                open={errors?.postcode !== ""}
              >
                <input
                  type="text"
                  placeholder="Postcode"
                  className={`w-full focus:border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] ${
                    errors?.postcode !== ""
                      ? "border-[#fe7e7f] border-solid border-[2px]"
                      : "border-[#d7edff] border-solid border-[2px]"
                  } text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]`}
                  name="postcode"
                  value={inputs.postcode}
                  onChange={handleInputChange}
                />
              </ErrorTooltip>
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-0">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
                Hulsnummer{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <ErrorTooltip
                label={errors?.hlasnummer}
                open={errors?.hlasnummer !== ""}
              >
                <input
                  type="text"
                  placeholder="Hulsnummer"
                  className={`w-full focus:border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] ${
                    errors?.hlasnummer !== ""
                      ? "border-[#fe7e7f] border-solid border-[2px]"
                      : "border-[#d7edff] border-solid border-[2px]"
                  } text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]`}
                  name="hlasnummer"
                  value={inputs.hlasnummer}
                  onChange={handleInputChange}
                />
              </ErrorTooltip>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
