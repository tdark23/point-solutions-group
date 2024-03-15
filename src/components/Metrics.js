import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useScroll } from "./../hooks/useScroll.js";
import { motion } from "framer-motion";

import "./../styles/components/metrics.css";
import { fromDown } from "../utils/Animations.js";

const Metrics = () => {
  const [element, controls] = useScroll();

  const Number = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  return (
    <motion.div
      variants={fromDown}
      ref={element}
      animate={controls}
      transition={{ delay: 0.2, type: "tween" }}
    >
      <div className="space-80px" />
      <div className="metrics-wrapper">
        <div className="metrics-text-wrapper">
          <h2 className="metrics-text">+<Number n={75} /></h2>
          <h5>Projets</h5>
        </div>
        <div className="metrics-text-wrapper">
          <h2 className="metrics-text self">
            {" "}
            <Number n={50} />{" "}
          </h2>
          <h5>Clients</h5>
        </div>
        <div className="metrics-text-wrapper">
          <h2 className="metrics-text"><Number n={20} /></h2>
          <h5>Partenariats</h5>
        </div>
      </div>
    </motion.div>
  );
};

export default Metrics;
