import React from "react";
import redprofile from "../assets/redprofile.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";


export default function Contact() {
  return (
    <section className="py-20 bg-white text-black font-sans px-6 md:px-20 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

        {/* Left Contact Info */}
        <div className="md:col-span-2 space-y-8 text-lg md:text-2xl leading-relaxed text-left">
          <p>
            Reach out anytime, I’m quick to respond and always down to talk ideas, collabs, or new opportunities.
          </p>

          <div className="space-y-4">
            <p><strong>Let's Connect!</strong></p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:khushianand009@gmail.com"
                className="text-teal-600 hover:underline"
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
                className="text-teal-600 hover:underline"
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
                className="text-teal-600 hover:underline"
              >
                github.com/k7ushi
              </a>
            </p>
            <p>
              <strong>Portfolio:</strong>{" "}
              <a href="/" className="text-teal-600 hover:underline">
                www.khushianand.in
              </a>
            </p>
          </div>
        </div>



       <div className="flex items-start justify-center md:justify-end md:items-end h-full mr-40 relative">

  {/* Floating image 1 - bottom-left
 <div className="absolute top-[90px] right-[190px] w-28 h-28 animate-drift1">
  <div className="relative w-full h-full">
    <img
      src={img9}
      alt=""
      className="w-full h-full rounded-full object-cover"
    />
    <span className="absolute bottom-1 left-[6px] w-6 h-6 bg-[#39FF14] border-[3px] border-white rounded-full"></span>
  </div>
</div> */}


  {/* Floating image 2 - middle-right */}
  <div className="absolute top-[70px] left-[290px] w-40 h-40 animate-drift2">
  <div className="relative w-full h-full">
    <img
      src={img7}
      alt=""
      className="w-full h-full opacity-90 rounded-full object-cover"
    />
    <span className="absolute bottom-1 left-[15px] w-6 h-6 bg-[#39FF14] border-[3px] border-white rounded-full"></span>
  </div>
</div>


  {/* Floating image 3 - top-center above main image */}
  <div className="absolute top-[-50px] left-[130px] w-36 h-36 animate-drift3">
  <div className="relative w-full h-full">
    <img
      src={img8}
      alt=""
      className="w-full h-full opacity-90 rounded-full object-cover"
    />
    <span className="absolute bottom-1 left-[8px] w-6 h-6 bg-[#39FF14] border-[3px] border-white rounded-full"></span>
  </div>
</div>


  {/* Main profile image */}
  <div className="relative w-52 h-52 z-10">
    <img
      src={redprofile}
      alt="Khushi Anand"
      className="w-full h-full rounded-full object-cover"
    />
    <span className="absolute bottom-1 left-4 w-9 h-9 bg-[#39FF14] border-[4px] border-white rounded-full"></span>
  </div>
</div>





      </div>
    </section>
  );
}
