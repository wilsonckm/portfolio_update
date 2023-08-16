import { useEffect, useRef } from "react";
import "./Hero.css";
import { motion, useAnimation, useInView } from "framer-motion";
import SplitType from "split-type";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const hero = new SplitType(".hero-main");
  // console.log(hero.chars);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "80vh" }}
        >
          <h1 id="hero-text" className="hero-main">
            Wilson Chan
          </h1>
        </div>
      </motion.div>
    </>
  );
}
