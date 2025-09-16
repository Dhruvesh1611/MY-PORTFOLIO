import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Welcome text in top left */}
      <div className="absolute top-40 left-20 z-10">
        <h1
          className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          style={{
            fontFamily: `"Didot", "Bodoni MT", "Times New Roman", serif`,
          }}
        >
          Welcome to my portfolio,
        </h1>
      </div>

      <HeroContent />
    </div>
  );
};
