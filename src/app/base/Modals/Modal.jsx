"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Modal({ children, setModal, addClass }) {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) setModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      className={"modal " + (addClass ? addClass : "")}
      onClick={closeModal}
    >
      {children}
    </motion.div>
  );
}
