import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function getAnimationSettings(angle, originX) {
  return {
    particleCount: 3,
    angle,
    spread: 55,
    origin: { x: originX },
    colors: ["#fdca4b", "#df6d45", "#1dad91"],
  };
}

export default function EndBoardConfetti() {
  const refAnimationInstance = useRef(null);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(60, 0));
      refAnimationInstance.current(getAnimationSettings(120, 1));
    }
  }, []);
  const [intervalId, setIntervalId] = useState(
    setInterval(nextTickAnimation, 120)
  );

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />;
}
