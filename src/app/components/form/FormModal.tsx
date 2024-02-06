"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Modal from 'react-modal';

import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import FirstScreen from "../../components/form/FirstScreen";
import SecondScreen from "../../components/form/SecondScreen";
import ThirdScreen from "../../components/form/ThirdScreen";
import FourthScreen from "../../components/form/FourthScreen";

import { ArrowLeft, X } from "lucide-react";

// Change this to 'import { useSearchParams } from "react-router-dom" if working in react'
import { useSearchParams } from "next/navigation";
import OpenButton from "./OpenButton";
import { client } from "../../utils/client";
import { useModal } from "../../hooks/ModalContext";


import "../../globals.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(51,51,51,0.6)",
    zIndex: "9001",
  },
};

Modal.setAppElement("body");

const initialInputs = {
  useCase: "",
  naam: "",
  gender: "",
  email: "",
  mobiel: "",
  postcode: "",
  hlasnummer: "",
  buildingType: "",
  gewenste: "0 tot 3 manden",
  oppervlakte: "",
  type: "",
  toepassing: "",
  vloerverwarming: "geen",
  story: "",
}

const initialErrors = {
  useCase: "",
  naam: "",
  gender: "",
  email: "",
  mobiel: "",
  postcode: "",
  hlasnummer: "",
  buildingType: "",
  gewenste: "",
  oppervlakte: "",
  type: "",
  toepassing: "",
  vloerverwarming: "",
  story: "",
}

const FormModal = () => {
  const [loading,setLoading] = useState(false)
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [cid, setCid] = useState("");
  const [inputs, setInputs] = useState(initialInputs);
  const [errors, setErrors] = useState(initialErrors)

  const searchParams = useSearchParams();
  const { isOpen, setIsOpen, closeModal } = useModal();


  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    setErrors(initialErrors)
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  useEffect(() => {
    let newOpen = false;
    const widget = searchParams.get("widget");
    const cidParams = searchParams.get("cid");
    setCid(cidParams || "");
    if (widget && widget === "open") {
      newOpen = true;
    }
    setIsOpen(newOpen);
  }, [searchParams]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStepIndex(0);
      setInputs(initialInputs);
    }
  }, [isOpen]);


  const { step, goToStep, isFirstStep, isLastStep, back, next, isThirdStep } =
    useMultiStepForm(
      [
        <FirstScreen key={1} inputs={inputs} handleInputChange={handleInputChange} errors={errors} />,
        <SecondScreen key={2} inputs={inputs} handleInputChange={handleInputChange} errors={errors} />,
        <ThirdScreen key={3} inputs={inputs} handleInputChange={handleInputChange} errors={errors} />,
        <FourthScreen key={4} />,
      ],
      currentStepIndex,
      setCurrentStepIndex
    );

  const handleFormSubmit = async () => {
    try {
      // Adding the cid field to the form data
      const formData = {
        ...inputs,
        cid: cid, // Replace 'your_cid_here' with your actual cid
      };

      // Create a new document in the 'form' collection
      const response = await client.create({
        _type: "form", // 'form' should match the name of your Sanity schema
        ...formData, // Spread all form data into the document
      });

      console.log("Form data posted to Sanity:", response);
      // Handle success if needed
    } catch (error) {
      console.error("Error posting form data to Sanity:", error);
      // Handle error if needed
    }
  };

  const storeContacts = async () => {
    const { naam, email, mobiel, postcode, gender, hlasnummer } = inputs; // Assuming inputs is the state containing these values

    const requestData = {
      name: naam,
      email: email,
      mobile: mobiel,
      postcode: postcode,
      gender: gender,
      homeNumber: hlasnummer,
    };

    try {
      const response = await fetch("/api/createContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to store contacts");
      }

      // Handle success response
      const data = await response.json();
      console.log("Contact stored successfully:", data);
    } catch (error) {
      console.error("Error storing contacts:");
      // Handle error
    }
  };
  console.log(errors)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (currentStepIndex === 0){
      if (inputs.useCase === ""){
        setErrors((prevErrors) => ({
          ...prevErrors,
          useCase: "Please select one of the options",
        }));
        return;
      }
      if (inputs.naam === ""){
        setErrors((prevErrors) => ({
          ...prevErrors,
          naam: "Vul een geldig naam in",
        }));
        return;
      }
      if (inputs.gender === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          gender: "Vul een geldig gender in",
        }));
        return;
      }
      if (inputs.email === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Vul een geldig email adres in",
        }));
        return;
      }
      if (inputs.mobiel === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobiel: "Vul een geldig mobiel in",
        }));
        return;
      }
      if (inputs.postcode === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          postcode: "Vul een geldig postcode in",
        }));
        return;
      }
      if (inputs.hlasnummer === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          hlasnummer: "Vul een geldig hlasnummer in",
        }));
        return;
      }
    }

    if (currentStepIndex === 1) {
      if (inputs.buildingType === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          buildingType: "Please select one of the options",
        }));
        return;
      }
      if (inputs.gewenste === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          gewenste: "Please select one of the options",
        }));
        return;
      }
      if (inputs.oppervlakte === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          oppervlakte: "Vul een geldig oppervlakte in",
        }));
        return;
      }
      if (inputs.type === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          type: "Please select one of the options",
        }));
        return;
      }
    }

    if (currentStepIndex === 2) {
      if (inputs.toepassing === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          toepassing: "Please select one of the options",
        }));
        return;
      }
      if (inputs.vloerverwarming === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          vloerverwarming: "Please select one of the options",
        }));
        return;
      }
    }

    if (isLastStep) {
      closeModal()
      return;
    }

    if (isFirstStep) {
      next()
      await storeContacts();
      return
    }

    if (isThirdStep) {
      setLoading(true)
      await handleFormSubmit();
      setLoading(false)
    }
    next();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldReturnFocusAfterClose={false}
      contentLabel="Newsletter Modal"
      className="w-full max-w-[970px] relative flex items-center justify-center px-2 h-full mx-auto my-auto overflow-y-auto pt-[8rem] pb-5 md:py-0"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      id="newsletter-popup-form"
    >
    <div className="w-[95%] md:w-[80%] max-w-[450px] h-max my-5 rounded-xl shadow-lg bg-[#fdfdff]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-between h-full w-full relative p-8 bg-[#fdfdff] rounded-xl"
      >
        {!isFirstStep && !isLastStep && (
          <button
            type="button"
            className="absolute -top-[14px] -left-3 h-[4rem] w-[4rem] rounded-full shadow-xl flex items-center justify-center z-10 bg-white"
            onClick={back}
          >
            <ArrowLeft size={37} strokeWidth={2.6} color="#A8A7A9" />
          </button>
        )}
        <button
          type="button"
          className="absolute -top-2 -right-2 h-12 w-12 rounded-full shadow-xl flex items-center justify-center z-10 bg-white"
          onClick={back}
        >
          <X
            size={30}
            strokeWidth={2.6}
            color="#7E7D80"
            onClick={closeModal}
          />
        </button>
        {step}
        <div className="w-full flex mt-6">
          {!isLastStep && (
            <button className="bg-[#0090ff] text-white w-full py-3 md:py-4 text-lg rounded-[5px]">
              {loading ? 'Loading...' : 'Offerte aanvragen'}
            </button>
          )}
          {isLastStep && (
            <button className="bg-[#65c759] text-white w-full py-3 md:py-4 text-lg rounded-[5px]">
              Aanvraag gelukt
            </button>
          )}
        </div>
      </form>
    </div>
    </Modal>
  );
};

export default FormModal;
