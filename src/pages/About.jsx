import React from "react";
import profile from "../assets/profile.jpg";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

export default function About() {
  const imageSet = [img5, img3, img1, img4, img6, img2, img5, img3, img1, img4, img6, img2];

  return (
    <section className="min-h-screen bg-white text-black font-sans px-6 md:px-20 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* Left (Text Section) */}
        <div className="text-left md:col-span-2 space-y-6 text-2xl sm:text-lg md:text-xl leading-relaxed">
          <p>
            I'm a <span className="bg-[#c2b5e2] rounded-md px-1">Full Stack Web Developer</span> with expertise in the MERN stack <span className="bg-yellow-300 rounded-md px-1">(MongoDB, Express.js, React.js, Node.js)</span>, and a surprisingly poetic start. With an academic background in <span className="bg-[#e36a4e] rounded-md px-1">English Literature</span>, my journey into tech wasn't conventional, it was carved from curiosity, persistence, and a desire to tell stories through code.
          </p>

          <p>
            I transitioned from dissecting metaphors and stanzas to engineering interactive digital experiences. What began as late-night exploration turned into a full-time passion, building dynamic web applications that blend function and form seamlessly.
          </p>

          <p>
            Front-end development is my playground. I thrive on crafting intuitive UIs, refining UX flows, and embedding motion through subtle animations. It all started with tweaking <span className="bg-[#c2b5e2] rounded-md px-1">CSS on CMS templates</span>, but quickly escalated to building entire interfaces from scratch. That click, that first DOM manipulation, I was hooked.
          </p>

          <p>
            I also bring to the table a <span className="bg-yellow-300 rounded-md px-1">certified background in Digital Marketing</span>. I've led campaigns using <span className="bg-[#e36a4e] rounded-md px-1">Meta Ads, Google Analytics, SEO, and email marketing</span>. This duality of tech + marketing helps me think about both how a product works, and how it performs in the wild.
          </p>

          <p>
            I'm currently pursuing my MCA at Amity University (Delhi NCR), sharpening my technical depth while staying hands-on with real-world freelance and personal projects. Whether it's a freelance gig or a full-stack build, I believe learning happens most when you're shipping, not just studying.
          </p>

          <p>
            My philosophy? Code is like writing: clean, intentional, and made to connect. I'm here to build tools that not only work, but resonate.
          </p>
        </div>

        {/* Right (Vertical Sliders) */}
        <div className="flex flex-col sm:flex-row gap-2 h-[400px] sm:h-[600px] md:h-[700px] overflow-hidden justify-center items-center">
          {/* Top-to-bottom slider */}
          <div className="w-[140px] sm:w-[160px] md:w-[180px] overflow-hidden group">
            <div className="space-y-2 animate-vertical-scroll-down group-hover:[animation-play-state:paused]">
              {imageSet.map((img, i) => (
                <div key={i} className="transition-transform duration-400 hover:scale-125 hover:z-50">
                  <img
                    src={img}
                    alt={`down-${i}`}
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom-to-top slider */}
          <div className="w-[140px] sm:w-[160px] md:w-[180px] overflow-hidden group">
            <div className="space-y-2 animate-vertical-scroll-up group-hover:[animation-play-state:paused]">
              {imageSet.map((img, i) => (
                <div key={i} className="transition-transform duration-400 hover:scale-125 hover:z-50">
                  <img
                    src={img}
                    alt={`up-${i}`}
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
