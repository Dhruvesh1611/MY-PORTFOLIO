import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-10 scroll-mt-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        About Me
      </h1>

      {/* Personal Introduction with Photo */}
      <div className="max-w-6xl mb-12 text-center">
        <div className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg">
                <Image
                  src="/profile_photo.jpg"
                  alt="Dhruvesh Shyara"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">
                Hi, I am{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-vamos">
                  Dhruvesh Shyara
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A passionate Full Stack Developer who loves creating innovative digital experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Content and Photo Layout */}
      <div className="max-w-7xl w-full mb-12 flex flex-col lg:flex-row items-center justify-center gap-12 px-4">

        {/* About Content Box */}
        <div className="w-full lg:w-1.3/3">
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm h-full">
            <div className="text-gray-300 leading-5 text-lg space-y-6">
              <p>
                I am a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science at Ganpat University. 
                I specialize in building modern web applications using React, Node.js, and MongoDB.
              </p>
              <p>
                My expertise includes developing responsive websites with HTML5, CSS3, and JavaScript, 
                as well as creating full-stack applications with React frontend and Node.js backend. 
                I have experience with e-commerce platforms, REST APIs, and database management.
              </p>
              <p>
                I'm actively involved in coding competitions and hackathons, constantly learning new technologies 
                and frameworks to stay updated with the latest web development trends.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Photo - Square and aligned with other boxes */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative z-40 w-full max-w-md aspect-square rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-lg">
            <Image
              src="/profilephoto.jpg"
              alt="Dhruvesh Shyara"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
