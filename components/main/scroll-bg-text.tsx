"use client";
import { useState } from "react";

export const ScrollBgText = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-5 flex items-center justify-center select-none"
    >
      <div
        style={{
          transform: "scaleY(1.8)",
          transformOrigin: "center",
        }}
        className="text-center leading-none font-extrabold uppercase whitespace-nowrap px-4 tracking-[0.08em] animate-float"
      >
        <div className="flex flex-col items-end relative pointer-events-auto">
          

          {/* Main text */}
          <span
            style={{
              fontFamily: `Georgia, "Times New Roman", Times, serif`,
            }}
            className="text-[20vw] md:text-[10vw] font-black bg-gradient-to-b from-white to-cyan-300 text-transparent bg-clip-text opacity-25"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            DHRUVESH
          </span>

          <span
            className="text-[8vw] md:text-[4vw] font-semibold bg-gradient-to-b from-white to-cyan-300 text-transparent bg-clip-text opacity-25"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            SHYARA
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes sparkFlicker {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
