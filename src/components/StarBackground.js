
import React from "react";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#0099ff",
          backgroundImage: "radial-gradient(circle, #0099ff, #0000ff)",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;