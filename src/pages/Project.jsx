import React from "react";
import uber from "../assets/uber.jpg";
import socialmedia from "../assets/socialmedia.jpg";
import dashboard from "../assets/dashboard.jpg";

import mongodb from "../assets/mongodb.jpg";
import express from "../assets/express.jpg";
import react from "../assets/react.jpg";
import node from "../assets/node.jpg";
import tailwind from "../assets/tailwind.jpg";

export default function Projects() {
  return (
    <section className="min-h-screen px-6 md:px-20 mb-10 text-black bg-white font-sans space-y-12 sm:space-y-16 md:space-y-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-left">Projects</h1>

      {/* Project 1 – UBER Clone */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-[500px] flex-shrink-0">
          <img
            src={uber}
            alt="UBER Clone"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">UBER Clone</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-base sm:text-lg text-gray-700">
            <p>Ride booking application exactly like UBER with user and captain panels. Includes ride request and live ride status.<br></br><br></br>
              Although it still misses a few features like updating the captain’s dashboard with hours online, total fare collected, etc., and real-time path tracking between pickup and drop locations.
              <div>
            <h4 className="font-semibold text-gray-800 mt-4">Tech Stack:</h4>
            <div className="flex gap-3 mt-2">
              <img src={mongodb} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={express} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={react} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={node} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={tailwind} className="w-10 h-10 rounded-full object-cover border-2" />
            </div>
            <a
            href="https://github.com/k7ushi/uber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 font-semibold hover:underline block mt-2"
          >
            View GitHub Repository →
          </a>
          </div>

            </p>
            <p><b>Features used — </b>
              <ul className="list-disc pt-2 pl-6 space-y-2">
                <li>user authentication</li>
                <li>google maps integration</li>
                <li>live location access </li>
                <li>ride booking system</li>
                <li>driver dashboard</li>
                <li>responsive ui</li>
              </ul>
            </p>
          </div>
    
        </div>
      </div>

      {/* Project 2 – Social Media Platform */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-[500px] flex-shrink-0">
          <img
            src={socialmedia}
            alt="Social Media Platform"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Social Media Platform</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-base sm:text-lg text-gray-700">
            <p>
              Real-time chat, video calling, and 32 unique UI themes. JWT-based
              authentication and protected routes.<br></br><br></br>
              Includes onboarding experience, friend system, chat screens, API
              testing, and reusable custom hooks.
              <div>
            <h4 className="font-semibold text-gray-800 mt-4">Tech Stack:</h4>
            <div className="flex gap-3 mt-2">
              <img src={mongodb} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={express} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={react} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={node} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={tailwind} className="w-10 h-10 rounded-full object-cover border-2" />
            </div>
            <a
            href="https://github.com/k7ushi/uber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 font-semibold hover:underline block mt-2"
          >
            View GitHub Repository →
          </a>
          </div>
            </p>
            
            <p><b>Features used — </b>
              <ul className="list-disc pt-2 pl-6 space-y-2">
                <li>Onboarding Flow</li>
                <li>Friends System</li>
                <li>JWT-based login & signup flows </li>
                <li>Real-Time Chat</li>
                <li>Video Calling</li>
                <li>32 UI Themes</li>
                <li>Custom Hooks</li>
              </ul>
            </p>

          </div>   
        </div>
      </div>

      {/* Project 3 – Expense Tracker */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-[500px] flex-shrink-0">
          <img
            src={dashboard}
            alt="Expense Tracker"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Expense Tracker</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-base sm:text-lg text-gray-700">
            <p>
              Responsive finance tracker with user login, real-time dashboards,
              Excel report downloads.<br></br><br></br>
              Categorized income/expense tracking, analytics, and transaction
              summaries for seamless UX.
              <div>
            <h4 className="font-semibold text-gray-800 mt-4">Tech Stack:</h4>
            <div className="flex gap-3 mt-2">
              <img src={mongodb} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={express} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={react} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={node} className="w-10 h-10 rounded-full object-cover border-2" />
              <img src={tailwind} className="w-10 h-10 rounded-full object-cover border-2" />
            </div>
            <a
            href="https://github.com/k7ushi/uber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 font-semibold hover:underline block mt-2"
          >
            View GitHub Repository →
          </a>
          </div>
            </p>
             <p><b>Features used — </b>
              <ul className="list-disc pt-2 pl-6 space-y-2">
                <li>User Authenticatio</li>
                <li>Dashboard Overview</li>
                <li>Interactive Charts</li>
                <li>Recent Transactions</li>
                <li>Expense & Income Reports</li>
                <li>Delete Functionality </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
