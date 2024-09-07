import React from 'react';

// Importing images
import groupStudyImage from '../assets/feature/groupstudy.png';
import flashcardImage from '../assets/feature/flashcard.png'; // Example for another image
import chatFilesImage from '../assets/feature/chatfiles.png'; // Example for another image

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Feature 1: Custom Flashcards */}
          <div className="flex flex-col items-center text-center p-6 bg-[#F8F8F8] rounded-lg shadow-lg">
            {/* Adjust the image to fit the card */}
            <img src={flashcardImage} alt="Custom Flashcards" className="w-full h-56 mb-4 object-cover rounded-lg shadow-md" />
            <h3 className="mt-4 text-2xl font-bold text-[#333333]">Custom Flashcards</h3>
            <p className="mt-2 text-lg text-[#5f6368]">
              Generate personalized flashcards from any material and improve retention with our spaced-repetition algorithm.
            </p>
          </div>

          {/* Feature 2: Collaborative Study Groups */}
          <div className="flex flex-col items-center text-center p-6 bg-[#50E3C2] rounded-lg shadow-lg">
            <img src={groupStudyImage} alt="Collaborative Study Groups" className="w-full h-56 mb-4 object-cover rounded-lg shadow-md" />
            <h3 className="mt-4 text-2xl font-bold text-[#333333]">Collaborative Study Groups</h3>
            <p className="mt-2 text-lg text-[#5f6368]">
              Join study groups, collaborate with classmates, and learn faster by sharing knowledge and challenges.
            </p>
          </div>

          {/* Feature 3: Chat with Files */}
          <div className="flex flex-col items-center text-center p-6 bg-[#F5A623] rounded-lg shadow-lg">
            <img src={chatFilesImage} alt="Chat with Files" className="w-full h-56 mb-4 object-cover rounded-lg shadow-md" />
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
