import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">

          {/* FAQ 1 */}
          <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-lg">
            <button
              className="w-full text-left text-lg font-bold text-[#333333] flex justify-between items-center"
              onClick={() => toggleFAQ(1)}
            >
              What is SlateMindAI and how does it work?
              <svg className={`w-6 h-6 transition-transform ${openFAQ === 1 ? 'rotate-180' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 1 && (
              <div className="mt-4 text-base text-[#5f6368]">
                SlateMindAI is an AI-powered learning platform that helps students master their subjects faster. It allows you to generate flashcards, summaries, and quizzes from your notes or uploaded documents, making it easier to retain information and reduce study time.
              </div>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-lg">
            <button
              className="w-full text-left text-lg font-bold text-[#333333] flex justify-between items-center"
              onClick={() => toggleFAQ(2)}
            >
              Can I chat with my uploaded files?
              <svg className={`w-6 h-6 transition-transform ${openFAQ === 2 ? 'rotate-180' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 2 && (
              <div className="mt-4 text-base text-[#5f6368]">
                Yes! SlateMindAI allows you to chat directly with your uploaded documents. Ask questions, clarify concepts, and receive precise answers – all from the materials you’ve uploaded. It’s like having a tutor embedded within your own notes.
              </div>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-lg">
            <button
              className="w-full text-left text-lg font-bold text-[#333333] flex justify-between items-center"
              onClick={() => toggleFAQ(3)}
            >
              How do study groups work on SlateMindAI?
              <svg className={`w-6 h-6 transition-transform ${openFAQ === 3 ? 'rotate-180' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 3 && (
              <div className="mt-4 text-base text-[#5f6368]">
                With SlateMindAI, you can create or join study groups to collaborate with peers. Share materials, discuss topics, and track your group’s progress through our leaderboard feature. It’s a fun and interactive way to learn together.
              </div>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-lg">
            <button
              className="w-full text-left text-lg font-bold text-[#333333] flex justify-between items-center"
              onClick={() => toggleFAQ(4)}
            >
              What makes SlateMindAI different from other study tools?
              <svg className={`w-6 h-6 transition-transform ${openFAQ === 4 ? 'rotate-180' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 4 && (
              <div className="mt-4 text-base text-[#5f6368]">
                Unlike traditional study tools, SlateMindAI uses advanced AI to help you create flashcards, summaries, and quizzes from your own materials. It also offers chat functionality, which allows you to interact with your notes and get answers in real time, enhancing your understanding of complex subjects.
              </div>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-lg">
            <button
              className="w-full text-left text-lg font-bold text-[#333333] flex justify-between items-center"
              onClick={() => toggleFAQ(5)}
            >
              Is SlateMindAI suitable for all levels of learners?
              <svg className={`w-6 h-6 transition-transform ${openFAQ === 5 ? 'rotate-180' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 5 && (
              <div className="mt-4 text-base text-[#5f6368]">
                Absolutely! Whether you’re a high school student, a college learner, or a professional preparing for certification, SlateMindAI adapts to your needs. Its personalized learning features help you make the most of your study time.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
