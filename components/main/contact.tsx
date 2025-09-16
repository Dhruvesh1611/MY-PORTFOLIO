import Link from "next/link";

import { CONTACT, SOCIALS } from "@/constants";

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-20 px-10">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Contact
      </h1>
      <div className="max-w-3xl w-full text-center text-gray-300 space-y-6">
        <p>
          I’m open to freelance/contract opportunities and full-time roles. Feel free to reach out.
        </p>
        <form className="mt-10 flex flex-col gap-6 w-full max-w-lg mx-auto">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2 text-left">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="What's your name?"
              className="bg-[#181824] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2 text-left">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="What's your email?"
              className="bg-[#181824] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-2 text-left">
              Your Message
            </label>
            <textarea
              rows={7}
              name="message"
              id="message"
              placeholder="What do you want to say?"
              className="bg-[#181824] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </div>

          <button
            type="submit"
            className="button-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mx-auto"
          >
            Send
          </button>
        </form>
        <div className="flex items-center justify-center gap-4 pt-8">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link key={name} href={link} target="_blank" rel="noreferrer noopener">
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


