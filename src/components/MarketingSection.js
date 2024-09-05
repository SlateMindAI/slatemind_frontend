import React from 'react';

const MarketingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Transform Your Learning with SlateMindAI</h2>

        {/* Use Case: Flashcards */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Flashcards that Learn from You</h3>
          <p className="text-lg">
            Upload your notes, books, or study materials, and instantly get personalized flashcards tailored to your exact needs.
            No more manual creation! SlateMindAI makes learning seamless.
          </p>
          <blockquote className="mt-4 italic bg-white text-[#333333] p-4 rounded-lg shadow-lg">
            <strong>Sarah’s Success:</strong> “SlateMindAI created flashcards from my notes, and my grades skyrocketed!”
          </blockquote>
        </div>

        {/* Use Case: Chat with Files */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Chat with Your Files – No More Guesswork!</h3>
          <p className="text-lg">
            Ask questions directly from your uploaded files and get clear answers from SlateMindAI. It's like having a tutor at your fingertips!
          </p>
          <blockquote className="mt-4 italic bg-white text-[#333333] p-4 rounded-lg shadow-lg">
            <strong>John’s Clarity:</strong> “SlateMindAI gave me clear answers from my own study materials. No more confusion!”
          </blockquote>
        </div>

        {/* Use Case: Study Groups */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Join Study Groups & Collaborate</h3>
          <p className="text-lg">
            Form study groups, challenge each other, and track progress with leaderboards. SlateMindAI makes group learning easy and fun!
          </p>
          <blockquote className="mt-4 italic bg-white text-[#333333] p-4 rounded-lg shadow-lg">
            <strong>Emily’s Group Learning:</strong> “My study group improved our grades by collaborating with SlateMindAI.”
          </blockquote>
        </div>

        {/* Join the Waitlist CTA */}
        <div className="text-center mt-12">
          <a href="#join-waitlist" className="bg-[#F5A623] text-white text-lg font-bold px-6 py-3 rounded-lg hover:bg-[#4A90E2] transition-colors duration-300">
            Join the Waiting List Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
