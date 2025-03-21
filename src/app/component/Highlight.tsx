"use client"

import { useEffect, useState } from "react";


export const Highlights = () => {


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({
        x: ev.clientX + window.scrollX,
        y: ev.clientY + window.scrollY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return <div
    className="pointer-events-none fixed top-0 inset-0 z-30 transition duration-300 lg:absolute w-full bg-red-100 hidden md:block"
    style={{
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    }}
  ></div>
}
