import React from "react";
import redprofile from "../assets/redprofile.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img3 from "../assets/3.jpg";

export default function Contact() {
  return (
    <section className="mt-10 md:mt-0 py-0 sm:py-10 bg-white text-black font-sans px-2 sm:px-2 md:px-36">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Left Contact Info */}
        <div className="md:col-span-2 space-y-6 sm:space-y-8 text-base sm:text-lg md:text-2xl leading-relaxed text-left">
          <p>
            Reach out anytime, I’m quick to respond and always down to talk ideas, collabs, or new opportunities.
          </p>

          <div className="space-y-3 sm:space-y-4">
            <p><strong>Let's Connect!</strong></p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:khushianand009@gmail.com"
                className="text-teal-600 hover:underline break-all"
              >
                khushianand009@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/k7ushi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline break-all"
              >
                linkedin.com/in/k7ushi
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/k7ushi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline break-all"
              >
                github.com/k7ushi
              </a>
            </p>
            <p>
              <strong>Portfolio:</strong>{" "}
              <a href="/" className="text-teal-600 hover:underline break-all">
                www.khushianand.in
              </a>
            </p>
          </div>
        </div>

        {/* Right Profile Image and Floating Bubbles */}
        <div className="relative flex items-center justify-center md:justify-end min-h-[300px] sm:min-h-[350px] md:min-h-[500px] lg:min-h-[600px]">

          {/* Floating image 2 - middle-right */}
          <div className="hidden sm:block absolute top-[30px] sm:top-[20px] left-[180px] sm:left-[220px] md:left-[290px] w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 animate-drift2 z-0">
            <div className="relative w-full h-full">
              <img
                src={img7}
                alt=""
                className="w-full h-full opacity-90 rounded-full object-cover"
              />
              <span className="absolute bottom-1 left-[10px] sm:left-[15px] w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-[#39FF14] border-[2px] sm:border-[3px] border-white rounded-full"></span>
            </div>
          </div>

          {/* Floating image 3 - top-center */}
          <div className="hidden sm:block  absolute -top-[30px] sm:-top-[40px] left-[60px] sm:left-[100px] md:left-[130px] w-20 sm:w-28 md:w-36 h-20 sm:h-28 md:h-36 animate-drift3 z-0">
            <div className="relative w-full h-full">
              <img
                src={img3}
                alt=""
                className="w-full h-full opacity-90 rounded-full object-cover"
              />
              <span className="absolute bottom-1 left-[6px] sm:left-[8px] w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-[#39FF14] border-[2px] sm:border-[3px] border-white rounded-full"></span>
            </div>
          </div>

          {/* Main profile image */}
          <div className="relative w-52 sm:w-44 md:w-52 h-52 sm:h-44 md:h-52 z-10">
            <img
              src={redprofile}
              alt="Khushi Anand"
              className="w-full h-full rounded-full object-cover"
            />
            <span className="absolute bottom-1 left-3 sm:left-4 w-6 sm:w-7 md:w-9 h-6 sm:h-7 md:h-9 bg-[#39FF14] border-[3px] sm:border-[4px] border-white rounded-full"></span>
          </div>

        </div>
      </div>
    </section>
  );
}
