import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white">
      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-full"></div>

      {/* Impactful Headline */}
      <h1 className="text-6xl font-extrabold text-center max-w-2xl leading-tight">
        Revolutionize the Way You Study with SlateMind AI
      </h1>

      {/* Catchy Subheadline */}
      <p className="mt-6 text-xl max-w-lg text-center font-light">
        Discover a whole new level of learning—AI-powered insights, real-time collaboration, and smarter study strategies that take you further, faster.
      </p>

      {/* Exciting Call-to-Action */}
      <a href="#join-waitlist" className="mt-8 px-6 py-3 bg-[#F5A623] text-white text-lg font-bold rounded-full hover:bg-[#4A90E2]">
         Join the Waiting List
      </a>
    </section>
  );
};

export default HeroSection;
