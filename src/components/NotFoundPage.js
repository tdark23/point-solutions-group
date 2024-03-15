import React from "react";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ fontSize: "48px", marginBottom: "20px" }}
      >
        Oops!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ fontSize: "24px", marginBottom: "20px" }}
      >
        La page que vous recherchez est introuvable.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ fontSize: "16px" }}
      >
        Il semble que vous ayez suivi un lien incorrect ou que la page ait été
        supprimée.
      </motion.p>
      {/* Ajoutez ici un bouton ou un lien pour retourner à la page d'accueil ou une autre page */}
    </motion.div>
  );
};

export default NotFoundPage;