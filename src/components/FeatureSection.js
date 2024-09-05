import React from 'react';

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6 bg-[#F8F8F8] rounded-lg shadow-lg">
            <div className="p-4 bg-[#4A90E2] text-white rounded-full">
              {/* Icon for Flashcards */}
              <i className="fas fa-clone text-4xl"></i>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-[#333333]">Custom Flashcards</h3>
            <p className="mt-2 text-lg text-[#5f6368]">
              Generate personalized flashcards from any material and improve retention with our spaced-repetition algorithm.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#50E3C2] rounded-lg shadow-lg">
            <div className="p-4 bg-[#50E3C2] text-white rounded-full">
              {/* Icon for Study Groups */}
              <i className="fas fa-users text-4xl"></i>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-[#333333]">Collaborative Study Groups</h3>
            <p className="mt-2 text-lg text-[#5f6368]">
              Join study groups, collaborate with classmates, and learn faster by sharing knowledge and challenges.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#F5A623] rounded-lg shadow-lg">
            <div className="p-4 bg-[#F5A623] text-white rounded-full">
              {/* Icon for Chat with Files */}
              <i className="fas fa-comments text-4xl"></i>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-[#333333]">Chat with Files</h3>
            <p className="mt-2 text-lg text-[#5f6368]">
              Upload documents and get instant insights. Chat with your files to find exactly what you're looking for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
