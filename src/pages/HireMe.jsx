import React from "react";
import resumeImage from "../assets/khushi-anand-resume.jpg";

import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import javascript from "../assets/javascript.jpg";
import mongodb from "../assets/mongodb.jpg";
import express from "../assets/express.jpg";
import react from "../assets/react.jpg";
import node from "../assets/node.jpg";
import tailwind from "../assets/tailwind.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import postman from "../assets/postman.jpg";
import github from "../assets/github.jpg";
import vite from "../assets/vite.jpg";
import photoshop from "../assets/photoshop.jpg";
import canva from "../assets/canva.jpg";

import { FaArrowDown } from "react-icons/fa";

export default function HireMe() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 bg-white text-black font-sans space-y-16 lg:space-y-0 lg:space-x-12">
      
      {/* Left Text Content */}
      <div className="w-full lg:w-[60%] space-y-6 text-left text-2xl sm:text-lg md:text-xl leading-relaxed">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase">
          Frontend. Backend. All the stack. All the sass.
          <br />
          Based in India, working worldwide.
        </h2>

        <p>
          I’ve spent the last 5+ years not just learning how to build websites, apps, and digital experiences, but actually doing it. From small-scale cms sites to fully custom full-stack builds, I’ve worked across a spectrum of projects, business types, and team structures. And in all that time, the one thing I’ve always done? Own the process from start to finish.
        </p>

        <p>
          Whether it's front-end polish or back-end logic, I get what makes things click, for the user, the client, and the dev team. I write code that’s clean, scalable, and built for actual people. Design systems? I respect them. User experience? I prioritize it. Performance? Always optimized.
        </p>

        <p>
          Frontend is my strong suit, it’s where my eye for detail, love for design, and obsession with user experience all collide. I thrive on bringing interfaces to life, turning static figma files into clean, responsive, high-performing code. whether it’s crafting seamless layouts with tailwind, building reusable components in react, or fine-tuning microinteractions that just hit right, I make sure every element has a purpose. I don’t just chase aesthetics, I chase clarity, function, and flow. for me, frontend isn’t just about visuals, it’s about creating an experience users remember, enjoy, and come back to!
        </p>

        <p>
          If I don’t know something, I figure it out. Fast. I don’t wait around to be told what to do, I take initiative, I research, I adapt. There’s no ego involved, just a drive to get better and deliver the best version of what’s possible.
        </p>

        <p>
          And when I say I deliver, I mean it. No flaky behavior. No missed deadlines. Just focused, consistent execution, every time. I care about the work I put out, and I make sure that shows.
        </p>

        <p>
          Looking to build something reliable, well-crafted, and actually meaningful? I’m your dev.
          not just for hire but for impact. I build things with intention. Every line of code, every design call, every decision, it’s all on purpose!
        </p>

        <p>
          I'm open to work currently,
          <br />
          freelance gigs, internships, part-time opportunities,
          <br />
          remote/cross-timezone, full-time position.
        </p>

        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">• Full Stack (MERN, Frontend + Backend)</h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">• Custom CMS & dashboard tools</h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">• Project bug fixing & optimization</h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">• Shopify + WooCommerce Websites</h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">• Figma to code conversions</h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">• Advanced Digital Marketing</h3>
        </div>
      </div>

      {/* Right Side – Resume + Toolkit */}
      <div className="w-full lg:w-[38%] flex flex-col items-center justify-start space-y-10">
        {/* Resume Section */}
        <img
          src={resumeImage}
          alt="Resume preview"
          className="w-32 sm:w-40 md:w-56 object-contain border rounded-md"
        />
        <a
          href="/Khushi-Anand-Resume.pdf"
          download
          className="bg-black text-white px-10 sm:px-16 py-2 sm:py-3 rounded-md flex items-center gap-2 text-base sm:text-lg hover:scale-105 transition-transform duration-300"
        >
          Download <FaArrowDown />
        </a>

        {/* Toolkit Section */}
        <div className="w-full text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">Toolkit</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
            {[
              html, css, javascript, mongodb, express, react, node,
              tailwind, bootstrap, postman, github, vite, photoshop, canva,
            ].map((icon, index) => (
              <div
                key={index}
                className="group relative cursor-pointer transition-transform duration-300 hover:scale-125 w-20 h-20 sm:w-24 sm:h-24"
              >
                <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
                  <img
                    src={icon}
                    alt="tech"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover:opacity-0 transition-opacity duration-200"
                  />
                  <span className="absolute text-sm sm:text-base text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {icon.split("/").pop().split(".")[0].toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Language & Skills Summary */}
        <div className="mt-10 text-left space-y-6 text-base sm:text-lg leading-relaxed px-2 sm:px-4">
          <p>
            [ <strong>Languages:</strong> HTML, CSS, JavaScript (ES6+), Python (Basics),
            <strong> Front-End:</strong> React.js, Redux, Tailwind CSS, Bootstrap,
            <strong> Back-End:</strong> Node.js, Express.js, MVC Architecture, Django (Basics),
            <strong> Database:</strong> MongoDB, DBMS (Basics), CRUD Operations,
            <strong> API & Tools:</strong> REST APIs, Axios, JSON, Postman, JWT Authentication, Git, GitHub,
            <strong> Digital Marketing:</strong> SEO, Meta Ads, Google Ads, Email Marketing, Campaign Strategy, Analytics, Wordpress, CRM, Content Marketing, Funnel Building & Lead Gen,
            <strong> Others:</strong> Figma, Adobe Photoshop, Canva ]
          </p>
        </div>
      </div>
    </section>
  );
}
