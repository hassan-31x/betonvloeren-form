import React, { ChangeEvent } from "react";
import ErrorTooltip from "./ErrorTooltip";
import { FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface ThirdScreenProps {
  inputs: {
    toepassing: string;
    vloerverwarming: string;
    story: string;
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  errors: Inputs
}

const ThirdScreen = ({ inputs, handleInputChange, errors }: ThirdScreenProps) => {
  const options = [
    "Selecteer toepassing",
    "Bakkerij",
    "Bedrijfsruimte",
    "Dans en discotheek",
    "ESD vloer",
    "Fabriek",
    "Garage",
    "Horeca",
    "Hotel",
    "Industrieel",
    "Kantoor",
    "Kapsalon",
    "Museum",
    "Magazijn",
    "Openbaargebouw",
    "Parkeergarage",
    "Professionele keuken",
    "Productie",
    "Renovatie gietvloer",
    "School",
    "Slagerij",
    "Supermarkt",
    "Sportcentrum",
    "Showroom",
    "Tandarts",
    "Werkplaats",
    "Woning",
    "Winkel",
    "Ziekenhuis",
  ];

  const styles = {
    focusBorder: {
      borderWidth: "2px",
      outline: "6px solid #f6f6f7",
      "&:focus": {
        borderColor: "#98d1ff",
      },
    },
    placeholderColor: {
      "&::placeholder": {
        color: "#dadbdf",
      },
    },
    rounded6: {
      borderRadius: "6px",
    },
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className=" mb-10">
        <h3 className="text-black text-2xl font-extrabold text-center mb-[5px]">
          Wat laatste vragen..
        </h3>
        <p className="font-medium text-lg text-center">
          Dit is
          <span className="text-[#0090ff] font-medium"> de latste stap!</span>
        </p>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex">
          <div className="flex-1">
            <label className="flex w-full flex-col gap-1">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
                Toepassing{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <ErrorTooltip label={errors?.toepassing} open={errors?.toepassing !== ''}>
              {/* <select
                name="toepassing"
                value={inputs.toepassing}
                onChange={handleInputChange}
                className="w-full focus:border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              >
                {options.map((option, index) => (
                  <option
                    key={index}
                    value={option.toLowerCase().replace(/\s/g, "-")}
                  >
                    {option}
                  </option>
                ))}
              </select> */}
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  width: '100%',
                  ...styles.focusBorder,
                  ...styles.placeholderColor,
                  ...styles.rounded6,
                }}
              >
                <Select
                  name="toepassing"
                  value={inputs.toepassing}
                  //@ts-ignore
                  onChange={handleInputChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {options.map((option, index) => (
                  <MenuItem value={option.toLowerCase().replace(/\s/g, "-")} key={index}>{option}</MenuItem>
                ))}
                </Select>
              </FormControl>
              </ErrorTooltip>
            </label>
          </div>
        </div>
        <div className="mb-1">
          <label className="flex w-full flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
              Vloerverwarming{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <ErrorTooltip label={errors?.vloerverwarming} open={errors?.vloerverwarming !== ''}>

            {/* <select
              name="vloerverwarming"
              value={inputs.vloerverwarming}
              onChange={handleInputChange}
              className="w-full focus:border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
            >
              <option value="geen">Geen vloerwarming</option>
              <option value="ja" className="text-[15px]">
                Ja
              </option>
              <option value="nee" className="text-[15px]">
                Nee
              </option>
            </select> */}
            <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  width: '100%',
                  ...styles.focusBorder,
                  ...styles.placeholderColor,
                  ...styles.rounded6,
                }}
              >
                <Select
                  name="vloerverwarming"
                  value={inputs.vloerverwarming}
                  //@ts-ignore
                  onChange={handleInputChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="geen">Geen vloerwarming</MenuItem>
                  <MenuItem value="ja">Ja</MenuItem>
                  <MenuItem value="nee">Nee</MenuItem>
                </Select>
              </FormControl>
              </ErrorTooltip>
          </label>
        </div>
        <div>
          <label className="flex w-full flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
              Extra informatie{" "}
            </span>

            <textarea
              name="story"
              value={inputs.story}
              onChange={handleInputChange}
              rows={5}
              cols={33}
              className="resize-none w-full focus:border-[2px] border-[#d7edff] border-solid border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] text-[#515766] placeholder-[#dadbdf] px-5 py-3 rounded-[6px]"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
