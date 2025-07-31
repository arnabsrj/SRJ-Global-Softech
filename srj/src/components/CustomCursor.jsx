import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    damping: 20,
    stiffness: 150,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    damping: 20,
    stiffness: 150,
    mass: 0.8,
  });

  const [clicks, setClicks] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleClick = (e) => {
      const id = Date.now();
      const newClick = {
        id,
        x: e.clientX,
        y: e.clientY,
      };

      setClicks((prev) => [...prev, newClick]);

      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== id));
      }, 600); // ripple lifespan
    };

    const checkTouch = () => {
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);
    checkTouch();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Hide native cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Trailing Circle */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-12 h-12 rounded-full border-2 border-sky-400 dark:border-blue-300 bg-sky-400/10 dark:bg-blue-400/10 pointer-events-none"
        style={{
          translateX: smoothX,
          translateY: smoothY,
          marginLeft: -24,
          marginTop: -24,
        }}
      />

      {/* Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-2.5 h-2.5 rounded-full bg-sky-500 dark:bg-blue-300 pointer-events-none"
        style={{
          translateX: mouseX,
          translateY: mouseY,
          marginLeft: -5,
          marginTop: -5,
        }}
      />

      {/* Ping Click Effects */}
      {clicks.map(({ id, x, y }) => (
        <motion.div
          key={id}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed z-[9998] w-16 h-16 rounded-full bg-sky-400/40 dark:bg-blue-400/40 pointer-events-none"
          style={{
            left: x - 32,
            top: y - 32,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
