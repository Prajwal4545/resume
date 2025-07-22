import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom'; // ✅ Required import
import prajwalImg from '../images/p.jpg';

export default function Home() {
  return (
    <section className="relative bg-gradient-to-tr from-blue-100 via-white to-pink-100 min-h-screen flex items-center justify-center px-4 pt-36 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-white opacity-30 pointer-events-none animate-pulse" />

      <div className="max-w-3xl mx-auto text-center z-10">
        <img
          src={prajwalImg}
          alt="praj"
          className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-blue-700"
        />

        <h1 className="text-5xl font-extrabold text-blue-800 mt-6">
          Hi, I’m Prajwal
        </h1>

        <h2 className="text-2xl text-gray-700 font-medium mt-4">
          <Typewriter
            words={['Aspiring Web Developer', 'Diploma Student', 'Future IT Professional']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-lg text-gray-600 mt-4">
          Building websites with creativity and functionality.
        </p>

        {/* ✅ Know More Button with React Router */}
        <div className="mt-8">
          <Link
            to="/about"
            className="inline-block bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-800 transition-transform transform hover:scale-105 duration-300"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
