"use client";
import { useEffect, useRef } from "react";

const EyeBallEffect = () => {
  const eyeBallRef1 = useRef<HTMLDivElement | null>(null);
  const eyeBallRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!eyeBallRef1.current || !eyeBallRef2.current) return;
      const { clientX, clientY } = ev;
      const x = (clientX * 100) / window.innerWidth;
      const y = (clientY * 100) / window.innerHeight;

      eyeBallRef1.current.style.setProperty(`--x`, `${x}%`);
      eyeBallRef1.current.style.setProperty(`--y`, `${y}%`);
      eyeBallRef2.current.style.setProperty(`--x`, `${x}%`);
      eyeBallRef2.current.style.setProperty(`--y`, `${y}%`);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });
  return (
    <>
      <div className="bg-black h-screen items-center justify-center flex">
        <div className="eyes group flex gap-x-8 ">
          <div className="eye bg-white h-[120px] w-[240px]  items-center justify-center flex relative overflow-hidden rounded-[50%] group-hover:shadow-2xl group-hover:shadow-red-900 transform duration-300 ease-in-out">
            <div
              className="ball h-[40px] w-[40px] bg-black absolute rounded-[50%] border-[solid_#333333] border-[15px]  translate-x-[-50%] translate-y-[-50%] "
              ref={eyeBallRef1}
            ></div>
          </div>
          <div className="eye bg-white h-[120px] w-[240px] items-center justify-center flex relative overflow-hidden rounded-[50%] group-hover:shadow-2xl group-hover:shadow-red-900 transform duration-300 ease-in-out">
            <div
              className="ball h-[40px] w-[40px] bg-black absolute rounded-[50%] border-[solid_#333333] border-[15px] translate-x-[-50%] translate-y-[-50%] "
              ref={eyeBallRef2}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EyeBallEffect;
