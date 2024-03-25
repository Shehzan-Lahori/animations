"use client";
import { Paper } from "@mui/material";
import { useEffect, useRef } from "react";

const GradientEffect = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = ev;
      console.log(clientX, clientY);
      heroRef.current.style.setProperty(`--x`, `${clientX}px`);
      heroRef.current.style.setProperty(`--y`, `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <div className="bg-black">
        <div
          ref={heroRef}
          className="hero h-screen w-full flex items-center justify-center"
        >
          <p className="text-white text-5xl cursor-not-allowed">hello world</p>
        </div>
      </div>
    </>
  );
};

export default GradientEffect;
