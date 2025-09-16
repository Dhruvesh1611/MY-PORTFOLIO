"use client";

export const ScrollBgText = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-5 flex items-center justify-center select-none"
    >
      <span
        style={{ transform: "scaleY(1.8)", transformOrigin: "center" }}
        className="text-center leading-[0.8] text-[8vw] md:text-[7vw] font-extrabold tracking-[0.08em] uppercase whitespace-nowrap px-4 bg-gradient-to-b from-white to-cyan-300 text-transparent bg-clip-text opacity-25"
      >
        DHRUVESH SHYARA
      </span>
    </div>
  );
};


