import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white">
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-full"></div>
      <h1 className="text-5xl font-extrabold text-center max-w-2xl">
        Transform Your Study Experience with MindSlate AI
      </h1>
      <p className="mt-6 text-lg max-w-lg text-center">
        More than just flashcards: collaborate in study groups, chat with files, and reduce hallucinations with real-time insights.
      </p>
      <a href="#join-waitlist" className="mt-8 px-6 py-3 bg-[#F5A623] text-white text-lg font-bold rounded-full hover:bg-[#4A90E2]">
        Join the Waiting List
      </a>
    </section>
  );
};

export default HeroSection;
