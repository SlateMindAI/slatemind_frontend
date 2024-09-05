import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoadmapSection = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Add the Header */}
      <Header />

      {/* Roadmap Section */}
      <section className="flex-grow py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">Our Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* V1 - Current Features */}
            <div className="bg-[#F8F8F8] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">Current Features (V1)</h3>
              <ul className="list-disc pl-6 text-lg text-[#5f6368] space-y-2">
                <li>Flashcard Generation from Text & Files</li>
                <li>Study Groups for Collaborative Learning</li>
                <li>Chat with Files to Reduce Hallucination</li>
                <li>Leaderboards & Gamified Progress</li>
                <li>Generate Summaries, Quizzes, Flashcards</li>
              </ul>
            </div>

            {/* V2 - Upcoming Features */}
            <div className="bg-[#F5A623] p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Upcoming Features (V2)</h3>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Real-Time Collaboration in Study Groups</li>
                <li>AI-powered Summaries & Quizzes</li>
                <li>Enhanced Leaderboards by Subject</li>
                <li>API Integration with Learning Tools</li>
                <li>Mobile App (Coming Soon)</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a href="#join-waitlist" className="bg-[#50E3C2] text-white text-lg font-bold px-6 py-3 rounded-lg hover:bg-[#4A90E2] transition-colors duration-300">
              Join Waitlist for Early Access
            </a>
          </div>
        </div>
      </section>

      {/* Add the Footer */}
      <Footer />
    </div>
  );
};

export default RoadmapSection;
