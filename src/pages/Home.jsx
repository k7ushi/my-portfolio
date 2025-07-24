import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Typewriter from 'typewriter-effect'

import profileImg from "../assets/profile.jpg";
import logoOverlay from "../assets/home-logo.png";
import roundprofile from "../assets/roundprofile.png";

import uber from "../assets/uber.jpg";
import socialmedia from "../assets/socialmedia.jpg";
import dashboard from "../assets/dashboard.jpg";

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

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="min-h-screen bg-white text-black font-sans px-4 sm:px-6 md:px-20 pb-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-10 mb-16">
        {/* Left Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-[12vw] md:text-[7vw] font-bold leading-none whitespace-nowrap">
            Hi, <br /> I'm Khushi <span className="relative z-20">Anand</span>
          </h1>
          <p className="mt-6 ml-5 text-2xl sm:text-2xl md:text-4xl">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Digital Marketing Strategist',
                  'Writer at heart...',
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: 'font-semibold',
                cursorClassName: 'animate-blink',
              }}
            />
            <br></br>I live <span className="line-through">at the computer</span><br />
            in New Delhi, India
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative md:w-1/2 w-full flex justify-center md:justify-end">
          <div className="relative">
            <img src={profileImg} alt="Khushi Anand" className="rounded-2xl max-w-[250px] sm:max-w-xs md:max-w-md"/>
            <img src={logoOverlay} alt="Logo Overlay" className="absolute top-2 left-2 w-10 h-10 sm:w-12 sm:h-12 rounded-md"/>
          </div>
        </div>
      </div>

      <div className="relative">
  <div className="absolute top-0 left-0 mt-10 ml-10 z-10">
{/* left twitter card */}
      <div className="mt-10 rounded-2xl p-6 max-w-sm text-gray bg-[rgba(0,179,230,0.12)] backdrop-blur-lg">
  <div className="flex items-center gap-4 mb-3">
    <img
      src={roundprofile}
      alt="Khushi Anand"
      className="w-14 h-14 rounded-full object-cover"
    />
    <div>
      <p className="text-base font-bold text-gray">khushi anand</p>
      <p className="text-base text-gray">18:02 wednesday</p>
    </div>
  </div>
  <p className="text-base text-gray leading-relaxed">
    i once cried over a broken api call at 3am<br />
    and then fixed it like a queen 5 mins later.<br />
    emotional damage? debugged.
  </p>
</div>
</div>
</div>

      {/* Text Content */}
      <div className="text-right max-w-4xl ml-auto text-2xl leading-relaxed space-y-6">
        <p>
          Full Stack Web Developer <span className="bg-[#c2b5e2] rounded-md px-1">(MERN)</span><br />
          with a <span className="bg-yellow-300 rounded-md px-1">background in English Literature</span> and a passion for building{" "}<br />
          beautiful, intuitive, and high-impact digital experiences.
        </p>

        <p>
          I didn’t come from tech, <span className="bg-[#e36a4e] rounded-md px-1">I built my own path into it.</span> Went from<br />
          <span className="bg-[#c2b5e2] rounded-md px-1">dissecting poetry to crafting code</span> that tells stories through interfaces. What<br />
          started as late-night <span className="bg-yellow-300 rounded-md px-1">curiosity turned into building full-stack applications</span><br />
          using the MERN stack currently (MongoDB, Express.js, React.js, Node.js).
        </p>

        <p>
          <span className="bg-yellow-300 rounded-md px-1">Front-end</span> is my strong suit. I'm obsessed with clean UI, seamless UX,<br />
          <span className="bg-[#c2b5e2] rounded-md px-1">responsive layouts, and animations</span> that just feel right. I started by customizing<br />
          <span className="bg-[#e36a4e] rounded-md px-1">CMS templates with CSS and JavaScript</span>, that’s when I knew coding clicked.
        </p>

        <p>
          I’m also a certified <span className="bg-[#c2b5e2] rounded-md px-1">Digital Marketing Strategist</span> with real-world experience<br />
          in <span className="bg-yellow-300 rounded-md px-1">Meta Ads, Email Marketing, and Google Analytics, SEO</span>, so I understand both<br />
          the product and the performance side of digital. I believe good code is like<br />
          good writing: clean, expressive, and meant to connect.
        </p>

        <p>
          Currently pursuing my <span className="bg-[#e36a4e] rounded-md px-1">MCA at Amity University (Delhi NCR)</span>,<br />
          while gaining real world project experience on the side.<br />
          Hands-on learning over textbooks, always!
        </p>
      </div>






      <div className="mt-0">
        <h2 className="text-5xl font-bold pl-20 text-left mb-12">
          RECENT WORK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="border rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4">
            <img src={uber} alt="Work 1" className="w-full h-50  rounded" />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold mb-1">UBER Clone</h3>
              <p className="text-lg text-gray-600 mb-5">
                Developed a full-stack ride-booking application with user and
                captain panels. Implemented ride request, live ride status, and
                individual dashboards for both roles.
                <br />
              </p>
              <p className="text-lg text-gray-600">
                Payment is handled in cash to simulate traditional cab
                operations.
              </p>
              <p className="text-lg mt-3 font-bold">Tech Stack:</p>
              <div className="flex justify-center gap-3 mt-3 mb-5">
                <img
                  src={mongodb}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={express}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={react}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={node}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={tailwind}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
              </div>
              <a
                href="https://github.com/k7ushi/uber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg mt-8 font-bold hover:underline"
              >
                Project Link: GitHub
              </a>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4">
            <img
              src={socialmedia}
              alt="Work 2"
              className="w-full h-50 rounded"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold mb-1">Social Media Platform</h3>
              <p className="text-lg text-gray-600 mb-5">
                Built a feature-rich platform with real-time chat, video
                calling, and 32 unique UI themes. Integrated JWT-based
                authentication, protected routes, and a smooth onboarding
                experience.
                <br />
              </p>
              <p className="text-lg text-gray-600">
                Includes friend system, chat screen, custom hooks, and API
                testing.
              </p>
              <p className="text-lg mt-3 font-bold">Tech Stack:</p>
              <div className="flex justify-center gap-3 mt-3 mb-5">
                <img
                  src={mongodb }
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={express }
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={react}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={node}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={tailwind}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
              </div>
              <a
                href="https://github.com/k7ushi/uber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg mt-8 font-bold hover:underline"
              >
                Project Link: GitHub
              </a>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4">
            <img src={dashboard} alt="Work 3" className="w-full h-50 rounded" />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold mb-1">Expense Tracker</h3>
              <p className="text-lg text-gray-600 mb-5">
                Responsive personal finance tracker with JWT-authenticated user
                accounts and dynamic dashboards. Users can manage
                income/expenses, visualize data through charts, and download
                Excel reports.
                <br />
              </p>
              <p className="text-lg text-gray-600">
                Include category-wise tracking, recent transactions with smooth
                navigation.
              </p>
              <p className="text-lg mt-3 font-bold">Tech Stack:</p>
              <div className="flex justify-center gap-3 mt-3 mb-5">
                <img
                  src={mongodb}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={express}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={react}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={node}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
                <img
                  src={tailwind}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
              </div>
              <a
                href="https://github.com/k7ushi/uber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg mt-8 font-bold hover:underline"
              >
                Project Link: GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right mt-10 text-3xl pr-10 font-bold mb-20">
        <Link to="/projects" className="">
          Other Builds <span className="text-3xl">&raquo;&raquo;&raquo;</span>
        </Link>
      </div>

      <div className="mt-0">
        <h2 className="text-5xl font-bold pl-20 text-left mb-12">
          BLOG & BYTES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {blogs.map((blog, index) => (
          <a
            href={`/blogs/${blog._id}`}
            key={blog._id}
            className="flex gap-4 items-start"
          >
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-28 h-28 object-cover rounded"
            />
            <div>
              <p className="text-xs text-gray-400 mb-1">
                {new Date(blog.customDate || blog.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                )}
              </p>
              <h3 className="font-semibold text-lg mb-1">{blog.title}</h3>
              <p className="text-sm text-gray-600 clamp-2">{blog.summary}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="text-right mt-1 text-3xl pr-10 font-bold mb-20">
        <h3 className="text-3xl font-bold">
          Keep Reading <span className="text-3xl">»»»</span>
        </h3>
      </div>


  <h2 className="text-5xl font-bold pl-20 text-left mb-12">PORTFOLIO</h2>
  
  <div className="md:flex md:items-start md:justify-between gap-8">
    {/* Left - About */}
    <div className="text-left px-4 max-w-4xl text-2xl leading-relaxed space-y-6">
      <p>I’ve been <span className="bg-[#c2b5e2] rounded-md px-1">building, learning, & delivering work</span> for years now,<br />
      from creating CMS websites to designing and developing everything<br />
      from scratch. Over the <span className="bg-yellow-300 rounded-md px-1">last 5 years</span>, I’ve grown into a developer<br />
      who owns every step of the process.</p>

      <p>From <span className="bg-[#e36a4e] rounded-md px-1">front-end finesse to back-end logic,</span><br />
      I know what it takes to ship <span className="bg-[#c2b5e2] rounded-md px-1">solid, scalable, and meaningful work.</span></p>

      <p>I’m nothing in my soul if not committed. I take full ownership of my tasks,<br />
      manage timelines, and communicate clearly throughout. If there’s something<br />
      I don’t know (been in the game long enough to know it happens often in tech),<br />
      I adapt fast. <span className="bg-yellow-300 rounded-md px-1">I ask around, I search, I experiment, and</span> <span className="bg-[#e36a4e] rounded-md px-1">I always deliver.</span><br />
      <span className="bg-[#e36a4e] rounded-md px-1">No hand-holding.</span> <span className="bg-[#c2b5e2] rounded-md px-1">No delays.</span> <span className="bg-yellow-300 rounded-md px-1">Just results.</span></p>

      <p>Every project I take on gets my full commitment. Whether solo or<br />
      in a team, I hold myself accountable and make sure the outcome isn’t<br />
      just what’s expected, but better. <span className="bg-[#c2b5e2] rounded-md px-1">If you're looking for someone reliable,</span><br />
      growth-driven, and genuinely invested in building things that work,<br />
      I’m your dev. <span className="bg-[#e36a4e] rounded-md px-1">Let’s build something exceptional.</span></p>
    </div>

    {/* Right - Card */}
    <div className="mt-10 rounded-2xl p-6 max-w-sm text-gray bg-[rgba(0,179,230,0.12)] backdrop-blur-lg">
  <div className="flex items-center gap-4 mb-3">
    <img
      src={roundprofile}
      alt="Khushi Anand"
      className="w-14 h-14 rounded-full object-cover"
    />
    <div>
      <p className="text-base font-bold text-gray">khushi anand</p>
      <p className="text-base text-gray">11:47 thursday</p>
    </div>
  </div>
  <p className="text-base text-gray leading-relaxed">
    what do i bring to the table?<br />
    ownership, commitment, and execution. i simply get the work done, no matter what.<br />
    no hand-holding required.
  </p>
</div>

  </div>

{/* Toolkit Section */}
<div className="mt-7 flex flex-col md:flex-row items-start justify-between gap-12 px-10">
  {/* Left Text */}
  <div className="md:w-1/2 text-left space-y-6">
    <p className="text-2xl leading-relaxed">
      I'm open to work currently,<br />
      freelance gigs, internships, part-time opportunities,<br />
      remote/cross-timezone, full-time position.
    </p>

    {/* Subheadings */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">• Full Stack (MERN, Frontend + Backend)</h3>
      <h3 className="text-2xl font-bold">• Custom CMS & dashboard tools</h3>
      <h3 className="text-2xl font-bold">• Project bug fixing & optimization</h3>
      <h3 className="text-2xl font-bold">• Shopify + WooCommerce Websites</h3>
      <h3 className="text-2xl font-bold">• Figma to code conversions</h3>
      <h3 className="text-2xl font-bold">• Advanced Digital Marketing</h3>
    </div>

    {/* Resume Button */}
    <div className=" pt-4">
      <a
        href="/khushi-resume.pdf"
        download
        className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
      >
        Download my resume
      </a>
    </div>
  </div>


  {/* Right Grid */}
  <div className="md:w-1/2">

{/* Toolkit */}
<div className="-mt-20 text-right">
  <h3 className="text-3xl pr-20 font-bold mb-10">Toolkit</h3>

  {/* Row 1 – 3 icons */}
  <div className="flex justify-end gap-6 mb-6 ml-16">
    {/* HTML */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={html} alt="HTML" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">HTML</span>
      </div>
    </div>

    {/* CSS */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={css} alt="CSS" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">CSS</span>
      </div>
    </div>

    {/* JavaScript */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={javascript} alt="JavaScript" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">JavaScript</span>
      </div>
    </div>
  </div>

  {/* Row 2 – 4 icons */}
  <div className="flex justify-end gap-6 mb-6">
    {/* MongoDB */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={mongodb} alt="MongoDB" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">MongoDB</span>
      </div>
    </div>

    {/* Express */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={express} alt="Express" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">Express</span>
      </div>
    </div>

    {/* React */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={react} alt="React" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">React</span>
      </div>
    </div>

    {/* Node.js */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={node} alt="Node.js" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">Node.js</span>
      </div>
    </div>
  </div>

  {/* Row 3 – 4 icons */}
  <div className="flex justify-end gap-6 mb-6">
    {/* Tailwind */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={tailwind} alt="Tailwind" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">Tailwind</span>
      </div>
    </div>

    {/* Bootstrap */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={bootstrap} alt="Bootstrap" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">Bootstrap</span>
      </div>
    </div>

    {/* Postman */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={postman} alt="Postman" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">Postman</span>
      </div>
    </div>

    {/* GitHub */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={github} alt="GitHub" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">GitHub</span>
      </div>
    </div>
  </div>

  {/* Row 4 – 3 icons */}
  <div className="flex justify-end gap-6 ml-16">
    {/* Vite */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={vite} alt="Vite" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">Vite</span>
      </div>
    </div>

    {/* Photoshop */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={photoshop} alt="Photoshop" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">Photoshop</span>
      </div>
    </div>

    {/* Canva */}
    <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-150 w-24 h-24">
      <div className="w-full h-full border-2 border-teal-500 rounded-full flex items-center justify-center overflow-hidden relative">
        <img src={canva} alt="Canva" className="w-16 h-16 object-contain group-hover:opacity-0 transition-opacity duration-200" />
        <span className="absolute text-lg text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">Canva</span>
      </div>
    </div>
  </div>
</div>

  </div>


</div>

{/* Contact Info */}
<div className="mt-10 flex flex-col sm:flex-row justify-between text-2xl gap-6 sm:gap-0 text-gray-800 font-medium">

  {/* Email with copy on click */}
  <button onClick={() => {
      navigator.clipboard.writeText("khushianand009@gmail.com");
      alert("Email copied to clipboard!");
    }}
    className="hover:text-teal-500 transition-colors duration-200">khushianand009@gmail.com
  </button>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/k7ushi/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors duration-200">
    LinkedIn Profile
  </a>

  {/* GitHub */}
  <a href="https://github.com/k7ushi/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors duration-200">
    GitHub Projects
  </a>
</div>

{/* Gallery Section */}


<div className="w-full overflow-hidden mt-16 group">
  <div className="flex animate-slide group-hover:[animation-play-state:paused] gap-6">
    {[img5, img3, img1, img4, img6, img2, img5, img3, img1, img4, img6, img2].map((img, i) => (
      <div
        key={i}
        className="flex-shrink-0 transition-transform duration-300 hover:scale-125 hover:z-50"
      >
        <img
          src={img}
          alt={`gallery-${i}`}
          className="w-[220px] h-[320px] object-cover rounded-md shadow-lg"
        />
      </div>
    ))}
  </div>
</div>




</section>



    
  );
};

export default Home;
