import React from 'react';

const UserStoriesSection = () => {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">What Our Users Are Saying</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-[#5f6368] italic">
              "MindSlate AI completely transformed how I studied for my exams. The flashcards and study groups helped me ace my finals!"
            </p>
            <p className="mt-4 font-bold text-[#333333]">- Alex, College Student</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-[#5f6368] italic">
              "Uploading documents and chatting with them was a game-changer. I could find key insights instantly for my research papers."
            </p>
            <p className="mt-4 font-bold text-[#333333]">- Emma, Researcher</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-[#5f6368] italic">
              "I love the real-time collaboration in study groups. It’s like having a classroom at your fingertips!"
            </p>
            <p className="mt-4 font-bold text-[#333333]">- John, High School Senior</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStoriesSection;
